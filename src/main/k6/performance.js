import {group, check, sleep} from "k6";
import http from "k6/http";
import { Trend } from "k6/metrics";

export let options = {
    stages: [
        {duration: "5s", target: "25"},
        {duration: "10s", target: "25"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "content_get": ["avg<20"],
        "content_image": ["avg<40"],
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

const baseUrl = 'https://qa.enonic.com/admin/rest';
const contentImageMetric = new Trend("content_image");
const getContentMetric = new Trend("content_get");


export function loadImage(url) {
    let res = http.get(url);
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function testUrl(url, payload, metric) {
    let res = '';
    if (payload == null) {
        res = http.get(url);
    } else {
        res = http.post(url, JSON.stringify(payload), {headers: {"Content-Type": "application/json"}});
    }
    check(res, {
        "status is 200": (res) => res.status === 200,
        "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
    });

    let body = JSON.parse(res.body);
    let text = '';
    for (let key in body) {
        text += 'Index is: ' + key + '\nDescription is:  ' + body[key]
    }

    console.log(text);
    metric.add(res.timings.duration);
}

export function xp_login(username, password, debug) {
    // First we login. We are not interested in performance metrics from these login transactions
    var url = "https://qa.enonic.com/admin/rest/auth/login";
    var payload = { user: username, password: password };
    var res = http.post(url, JSON.stringify(payload), { headers: { "Content-Type": "application/json" } });
    if (typeof debug !== 'undefined')
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    return res;
};

export default function () {
    xp_login("pt@enonic.com", "PTpt123", true);
    group("load_resources", function () {
        // This is probably the way to go:
        testUrl(baseUrl + '/content?id=1327ce09-d6f5-44ba-a899-42aa5427a432', null, getContentMetric );

        // Simplified way to get image:
        let res = loadImage('https://qa.enonic.com/admin/rest/content/image/b46bbf33-f8d8-4146-a804-a58e78cc05f8?size=1213&ts=1528462056606');
        check(res, {
            "status is 200": (res) => res.status === 200,
            "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
        });
        contentImageMetric.add(res.timings.duration);
        sleep(10);
    })
};
