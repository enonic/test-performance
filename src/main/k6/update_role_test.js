import {group, check, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "3"},
        {duration: "10s", target: "3"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "update_group": ["avg<200"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114691,
            name: "Add members to existing group",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};

const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const updateRoleMetric = new Trend("update_role");


export default function () {
    console.log("######################### Add members to Role - script started ##########");

    common.xp_login("su", "password", restUrl);
    group("update_role", function () {
        let displayName = 'role-' + Math.floor((Math.random() * 1000000000) + 1);
        common.createRole(baseUrl,displayName );
        sleep(5);
        let updateResponse = common.addMembersToRole(baseUrl,displayName, ["user:system:su"], true);
        check(updateResponse, {
            "status is 200": (updateResponse) => updateResponse.status === 200,
            "content-type is application/json": (updateResponse) => updateResponse.headers['Content-Type'] === "application/json",
            "transaction time OK": (updateResponse) => updateResponse.timings.duration < 300
        });
        updateRoleMetric.add(updateResponse.timings.duration);
        sleep(5);
    })
};
