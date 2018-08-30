import {group, check, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
// import { createRootFolderJson } from "./content_json.js";
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
const updateContentMetric = new Trend("create_update_folder");


export function xp_login(username, password, debug) {
    // First we login. We are not interested in performance metrics from these login transactions
    var url = "http://127.0.0.1:8080/admin/rest/auth/login";
    var payload = {user: username, password: password};
    var res = http.post(url, JSON.stringify(payload), {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
};

// creates a content
export function createContent(name, debug) {
    let url = utils.createContentUrl(baseUrl);
    let body = utils.requestBodyForCreateRootFolder(name, "My Content");
    let res = http.post(url, body, {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

//updates content: changes only the display name
export function updateContent(id, contentName, newDisplayname, debug) {
    let url = utils.updateContentUrl(baseUrl);
    let body = utils.requestBodyForUpdateFolder(id, contentName, newDisplayname, utils.anonymousPermissions());
    let res = http.post(url, body, {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Update content: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export default function () {
    console.log("######################### Script started ##########");

    xp_login("su", "password");
    group("create_update_folder", function () {

        var contentName = 'content-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = createContent(contentName);
        let response = JSON.parse(res.body);
        console.log("ID of the content to update is: " + response.id);
        console.log("Content's name is: " + response.name);
        let res2 = updateContent(response.id, response.name, 'new display name', true);
        check(res2, {
            "status is 200": (res2) => res2.status === 200,
            "content-type is application/json": (res2) => res2.headers['Content-Type'] === "application/json",
        });

        updateContentMetric.add(res2.timings.duration);
        sleep(10);
    })
};
