import {group, check, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";

export let options = {
    stages: [
        {duration: "5s", target: "5"},
        {duration: "10s", target: "5"},
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
const getContentMetric = new Trend("content_create");


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


export function createContent(name,debug) {
    let url = baseUrl + '/content/create/';
    let body = {data: [], meta: [], displayName: "My Content", parent: '/', name: name, contentType: "base:folder", requireValid: false};
    let res = http.post(url, JSON.stringify(body), {headers: {"Content-Type": "application/json"}});
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export default function () {
    xp_login("su", "password", true);
    group("create_folder", function () {

        var contentName = 'content-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = createContent(contentName,true);
        console.log("Create Content: status=" + String(res.status) + "  Body=" + res.body);
        check(res, {
            "status is 200": (res) => res.status === 200,
            "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
        });

        getContentMetric.add(res.timings.duration);
        sleep(10);
    })
};
