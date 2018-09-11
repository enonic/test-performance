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
        "delete_role": ["avg<300"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 31147611,
            name: "K6, deleting of roles",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};
const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const deleteRoleMetric = new Trend("delete_role");

export default function () {
    common.xp_login("su", "password", restUrl);
    group("delete_role", function () {

        let displayName = 'role-' + Math.floor((Math.random() * 1000000000) + 1);
        common.createRole(baseUrl, displayName, true);
        sleep(5);
        console.log("Role should be deleted :" + displayName);
        let respDelete = common.deleteRole(baseUrl, displayName,true);
        check(respDelete, {
            "status is 200": (respDelete) => {
                respDelete.status === 200
            },
            "content-type is application/json": (resp) => resp.headers['Content-Type'] === "application/json",
            "transaction time OK": (resp) => {
                resp.timings.duration < 300;
            }
        });
        deleteRoleMetric.add(respDelete.timings.duration);
        sleep(10);
    })
};
