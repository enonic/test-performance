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
        "content_create": ["avg<200"],
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
const updateContentMetric = new Trend("create_update_folder");


//updates content: changes only the display name
export function updateContent(id, contentName, newDisplayname, debug) {
    let url = utils.updateContentUrl(baseUrl);
    let payloadJson = utils.payloadForUpdateFolder(id, contentName, newDisplayname, utils.anonymousPermissions());
    let res = http.post(url, payloadJson, {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Update content: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export default function () {
    console.log("######################### Update folder - script started ##########");

    common.xp_login("su", "password",baseUrl);
    group("create_update_folder", function () {

        let contentName = 'content-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = common.createFolder(contentName,baseUrl);
        let objJSON = JSON.parse(res.body);
        console.log("ID of the content to update is: " + objJSON.id);
        console.log("Content's name is: " + objJSON.name);
        let res2 = updateContent(objJSON.id, objJSON.name, 'new display name', true);
        check(res2, {
            "status is 200": (res2) => res2.status === 200,
            "content-type is application/json": (res2) => res2.headers['Content-Type'] === "application/json",
            "transaction time OK": (res2) => res2.timings.duration < 200
        });

        updateContentMetric.add(res2.timings.duration);
        sleep(10);
    })
};
