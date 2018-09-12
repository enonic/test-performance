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
        "delete_folder": ["avg<10"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114611,
            name: "performance testing: delete folders",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};

const baseUrl = 'http://127.0.0.1:8080/admin/rest';
const deleteFolderMetric = new Trend("delete_folder");

//deletes a content
export function deleteContent(path, debug) {
    let url = utils.deleteContentUrl(baseUrl);
    let contentPaths = [];
    contentPaths.push(path);
    let payload = utils.payloadForDeleteContent(contentPaths);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Delete content action: status= " + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export default function () {
    console.log("############ Delete folder - script started! ##########");
    common.xp_login("su", "password", baseUrl, true);
    group("delete_folder", function () {

        let contentName = 'folder-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = common.createFolder(contentName, baseUrl);
        sleep(10);
        let response = JSON.parse(res.body);
        console.log("ID of the content to delete is: " + response.id);
        let res2 = deleteContent(response.path, true);
        if (res2.status === 200) {
            console.log("Content has been deleted, timings.duration is :" + res2.timings.duration);
        }
        check(res2, {
            "status is 200": (res2) => res2.status === 200,
            "content-type is application/json": (res2) => res2.headers['Content-Type'] === "application/json",
            "transaction time OK": (res2) => {
                return res2.timings.duration < 40;
            }
        });

        deleteFolderMetric.add(res2.timings.duration);
        sleep(10);
    })
};
