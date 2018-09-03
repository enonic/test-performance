import {check, group, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "25"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "content_get": ["avg<30"],
        "content_image": ["avg<50"],
        "create_folder": ["avg<70"],
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
const getImageMetric = new Trend("content_image");
const getContentMetric = new Trend("content_get");
const createFolderMetric = new Trend("create_folder");

export function testUrl(url, payload, metric, contentType) {
    let res = '';
    if (payload == null) {
        res = http.get(url);
    } else {
        res = http.post(url, JSON.stringify(payload), {headers: {"Content-Type": "application/json"}});
    }
    check(res, {
        "status is 200": (res) => res.status === 200,
        ["content-type is " + contentType]: (res) => res.headers['Content-Type'] === contentType,
    });
    metric.add(res.timings.duration);
    sleep(1);

    if (contentType === "application/json") {
        let body = JSON.parse(res.body);
        console.log(body.id);
        return body.id;
    }

    // Display result to console (remove this code for real tests):
    // if (logJson) {
    //     let body = JSON.parse(res.body);
    //     let text = '';
    //     for (let key in body.data) {
    //         text += 'Index is: ' + key + '\nDescription is:  ' + JSON.stringify(body.data[key]) + '\n'
    //     }
    //     console.log("ID: " + body.id);
    //     console.log(text);
    // }
}

export default function () {
    common.xp_login("pt@enonic.com", "PTpt123", baseUrl);
    group("load_resources", function () {

        let testCounter = Math.floor((Math.random() * 1000000000) + 1);

        // Get Content
        // testUrl(baseUrl + '/content?id=1327ce09-d6f5-44ba-a899-42aa5427a432', null, getContentMetric, "application/json" );

        // Get Image
        testUrl(baseUrl + '/content/image/b46bbf33-f8d8-4146-a804-a58e78cc05f8?size=1213&ts=1528462056606', null, getImageMetric, "image/jpeg");

        // Create folder
        let contentId = testUrl(baseUrl + '/content/create/', {data: [], meta: [], displayName: "My Folder", parent: '/test', name: 'folder-' + testCounter, contentType: "base:folder", requireValid: false}, createFolderMetric, "application/json");
        testUrl(baseUrl + '/content?id=' + contentId, null, getContentMetric, "application/json" );
    })
};
