import {group, check, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "10"},
        {duration: "10s", target: "10"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "add_user_to_group": ["avg<500"],
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
const updateUserMetric = new Trend("add_user_to_group");
// 1. Create a user  2. Create a group 3. Add the user to new group.
export default function () {
    let groupName;
    let loginResp = common.xp_login("su", "password", restUrl);
    let res_json = JSON.parse(loginResp.body);
    groupName = 'group' + Math.floor((Math.random() * 1000000000) + 1);
    common.createSystemGroup(baseUrl, groupName, true);
    sleep(2);

    let userName = 'user-' + Math.floor((Math.random() * 1000000000) + 1);
    let email = userName + '@gmail.com';
    common.createUser(userName, email, 'Pa1S5S4woR9D', baseUrl, true);
    group("add_user_to_group", function () {

        let updateResponse = common.addMembershipsToUser(baseUrl, userName, email, ['group:system:' + groupName], true);
        check(updateResponse, {
            "status is 200": (updateResponse) => {
                return updateResponse.status === 200
            },
            "content-type is application/json": (updateResponse) => updateResponse.headers['Content-Type'] === "application/json",
            "transaction time OK": (updateResponse) => {
                console.log(' updateResponse.timings.duration :' + updateResponse.timings.duration);
                return updateResponse.timings.duration < 500;
            }
        });
        updateUserMetric.add(updateResponse.timings.duration);
        sleep(3);
    })
};
