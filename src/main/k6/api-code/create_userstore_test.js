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
        "create_user_store": ["avg<7000"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114699,
            name: "XP, create a user store",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};
const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const createUserStoreMetric = new Trend("create_user_store");

export default function () {
    common.xp_login("su", "password", restUrl, true);
    group("create_user_store", function () {

        let displayName = 'store-' + Math.floor((Math.random() * 1000000000) + 1);
        let key = 'key-' + Math.floor((Math.random() * 1000000000) + 1);
        console.log("########################## new User Store should be created! displayName is :" + displayName);
        let res = common.createUserStore(baseUrl, displayName, key, true);
        check(res, {
            "status is 200": (res) => {
                return res.status === 200;
            },
            "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
            "transaction time OK": (res) => {
                return res.timings.duration < 7000;
            }
        });
        createUserStoreMetric.add(res.timings.duration);
        sleep(5);
    })
};
