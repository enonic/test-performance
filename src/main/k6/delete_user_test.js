import {group, check, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "5"},
        {duration: "15s", target: "5"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "delete_user": ["avg<200"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114611,
            name: "K6, deleting of users",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};
const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const deleteUserMetric = new Trend("delete_user");

export default function () {
    common.xp_login("su", "password", restUrl, true);
    group("delete_user", function () {

        let userName = 'user-' + Math.floor((Math.random() * 1000000000) + 1);
        let email = userName + '@gmail.com';
        let res1 = common.createUser(userName, email, 'password', baseUrl);
        sleep(5);
        if (res1.status === 200) {
            console.log("new User has been created!, timings.duration is :" + res1.timings.duration);
        };
        console.log("User should be deleted :" + userName);
        let respDelete = common.deleteUser(baseUrl,userName);
        check(respDelete, {
            "status is 200": (respDelete) => {
                respDelete.status === 200
            },
            "content-type is application/json": (respDelete) => respDelete.headers['Content-Type'] === "application/json",
            "transaction time OK": (respDelete) => {
                respDelete.timings.duration < 200;
            }
        });
        deleteUserMetric.add(respDelete.timings.duration);
        sleep(10);
    })
};
