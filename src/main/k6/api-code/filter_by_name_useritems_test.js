import {group, check, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as common from "./common.js";

export let options = {
    stages: [
        {duration: "5s", target: "3"},
        {duration: "10s", target: "5"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "filter_by_name": ["avg<20"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114692,
            name: "Filtering of user item",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};

const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const filteringMetric = new Trend("filter_by_name");

export default function () {
    common.xp_login("su", "password", restUrl);
    group("filter_by_name", function () {

        let resp = common.filterItemsByName(baseUrl,'Everyone' , true);// 'system' - totalCount is 7
        check(resp, {
            "status is 200": (resp) => {
                return resp.status === 200;
            },
            "content-type is application/json": (resp) => resp.headers['Content-Type'] === "application/json",
            "transaction time OK": (resp) => {
                return resp.timings.duration < 20;
            }, "aggregation number is correct": (resp) => {
                let body = JSON.parse(resp.body);
                console.log(' response.timings.duration :' + resp.timings.duration);
                console.log(' items are filtered, totalCount :' + body.data.userItemsConnection.totalCount);
                return body.data.userItemsConnection.totalCount == 1;
            }
        });
        filteringMetric.add(resp.timings.duration);
        sleep(10);
    })
};
