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
const updateUserMetric = new Trend("update_user");

export default function () {
    common.xp_login("su", "password", restUrl, true);
    group("update_user", function () {

        let userName = 'user-' + Math.floor((Math.random() * 1000000000) + 1);
        let email = userName + '@gmail.com';
        common.createUser(userName, email, 'password', baseUrl, true);
        sleep(7);
        let updateResponse = common.addMembershipsToUser(baseUrl,userName,email,['role:system.admin'],true);
        check(updateResponse, {
            "status is 200": (updateResponse) => {
                updateResponse.status === 200
            },
            "content-type is application/json": (updateResponse) => updateResponse.headers['Content-Type'] === "application/json",
            "transaction time OK": (updateResponse) => {
                updateResponse.timings.duration < 300;
            }
        });
        updateUserMetric.add(updateResponse.timings.duration);
        sleep(10);
    })
};
