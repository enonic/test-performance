import {group, check, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
import * as utils from "./utils.js";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "3"},
        {duration: "10s", target: "3"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "create_publish_folder": ["avg<10"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114611,
            name: "K6 performance research",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};

const baseUrl = 'http://127.0.0.1:8080/admin/rest';
const publishContentMetric = new Trend("create_publish_folder");

//publish a content
export function publishContent(id, debug) {
    let url = utils.publishContentUrl(baseUrl);
    let items = [];
    items.push(id);
    let payload = utils.payloadForPublishContent(items);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Publish content action: status= " + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export default function () {
    console.log("######################### Script started ##########");
    common.xp_login("su", "password", baseUrl, true);
    group("create_publish_folder", function () {

        let contentName = 'folder-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = common.createRootFolder(contentName, baseUrl);
        let response = JSON.parse(res.body);
        console.log("ID of the content to publish is: " + response.id);
        let res2 = publishContent(response.id, true);
        if (res2.status === 200) {
            console.log("Content has been published, timings.duration is :" + res2.timings.duration);
        }
        check(res2, {
            "status is 200": (res2) => res2.status === 200,
            "content-type is application/json": (res2) => res2.headers['Content-Type'] === "application/json",
            "transaction time OK": (res2) => {
                return res2.timings.duration < 20;
            }
        });

        publishContentMetric.add(res2.timings.duration);
        sleep(10);
    })
};
