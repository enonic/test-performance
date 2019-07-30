import {group, check, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

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

export default function () {
    common.xp_login("su", "password", baseUrl, true);
    group("create_folder", function () {

        let contentName = 'folder-' + Math.floor((Math.random() * 1000000000) + 1);
        let res = common.createRootFolder(contentName, baseUrl, true);

        check(res, {
            "status is 200": (res) => res.status === 200,
            "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
            "transaction time OK": (res) => {
                return res.timings.duration < 200;
            }
        });

        getContentMetric.add(res.timings.duration);
        sleep(10);
    })
};
