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
        "update_group": ["avg<700"],
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
const updateGroupMetric = new Trend("update_group");


export default function () {
    console.log("######################### Add members to group - script started ##########");

    common.xp_login("su", "password", restUrl);
    group("update_group", function () {
        let displayName = 'group-' + Math.floor((Math.random() * 1000000000) + 1);
        common.createSystemGroup(baseUrl, displayName);
        sleep(5);
        let res2 = common.addMembersToSystemGroup(baseUrl, displayName, ["user:system:su"], true);
        check(res2, {
            "status is 200": (res2) => res2.status === 200,
            "content-type is application/json": (res2) => res2.headers['Content-Type'] === "application/json",
            "transaction time OK": (res2) => {
                console.log('res2.timings.duration: ' + res2.timings.duration);
                return res2.timings.duration < 700
            }
        });

        updateGroupMetric.add(res2.timings.duration);
        sleep(5);
    })
};
