import {group, check, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
import * as utils from "./utils.js";


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
const publishContentMetric = new Trend("create_publish_folder");


export function xp_login(username, password, debug) {
    // First we login. We are not interested in performance metrics from these login transactions
    let url = "http://127.0.0.1:8080/admin/rest/auth/login";
    let payload = {user: username, password: password};
    let res = http.post(url, JSON.stringify(payload), {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
};

// creates a content
export function createContent(name, debug) {
    let url = utils.createContentUrl(baseUrl);
    let body = utils.payloadForCreateRootFolder(name, "My Content");
    let res = http.post(url, body, {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

//publish a content
export function publishContent(id, debug) {
    let url = utils.publishContentUrl(baseUrl);
    let items = [];
    items.push(id);
    let body = utils.payloadForPublishContent(items);
    let res = http.post(url, body, {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Publish content action: status= " + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export default function () {
    console.log("######################### Script started ##########");

    xp_login("su", "password");
    group("create_publish_folder", function () {

        let contentName = 'content-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = createContent(contentName);
        let response = JSON.parse(res.body);
        console.log("ID of the content to publish is: " + response.id);
        let res2 = publishContent(response.id, true);
        check(res2, {
            "status is 200": (res2) => res2.status === 200,
            "content-type is application/json": (res2) => res2.headers['Content-Type'] === "application/json",
            "transaction time OK": (res2) => {
                console.log("Content has been published, timings.duration is :" + res2.timings.duration);
                res2.timings.duration < 10;
            }
        });

        publishContentMetric.add(res2.timings.duration);
        sleep(10);
    })
};
