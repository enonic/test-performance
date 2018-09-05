import {group, check, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "5"},
        {duration: "10s", target: "5"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "user_create": ["avg<200"],
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

const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const getContentMetric = new Trend("user_create");

export default function () {
    common.xp_login("su", "password", restUrl, true);
    group("user_create", function () {

        let userName = 'user-' + Math.floor((Math.random() * 1000000000) + 1);
        let email = userName + '@gmail.com';
        let res = common.createUser(userName, email, 'password', baseUrl, true);
        if (res.status === 200) {
            console.log("new User has been created!, timings.duration is :" + res.timings.duration);
        };
        check(res, {
            "status is 200": (res) => {
                res.status === 200
            },
            "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
            "transaction time OK": (res) => {
                res.timings.duration < 200;
            }
        });

        getContentMetric.add(res.timings.duration);
        sleep(10);
    })
};
