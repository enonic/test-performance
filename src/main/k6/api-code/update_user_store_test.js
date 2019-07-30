import {group, check, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as common from "./common.js";
import * as utils from "./utils.js";

export let options = {
    stages: [
        {duration: "5s", target: "3"},
        {duration: "10s", target: "3"},
        {duration: "5s", target: "0"}
    ],
    thresholds: {
        "update_user_store": ["avg<700"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114691,
            name: "User Store - Add permissions for everyone",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};

const baseUrl = 'http://127.0.0.1:8080/admin';
const restUrl = 'http://127.0.0.1:8080/admin/rest';
const updateUserStoreMetric = new Trend("update_user_store");


export default function () {
    common.xp_login("su", "password", restUrl);
    group("update_user_store", function () {

        let displayName = 'store-' + Math.floor((Math.random() * 1000000000) + 1);
        let key = 'key-' + Math.floor((Math.random() * 1000000000) + 1);
        common.createUserStore(baseUrl, displayName,key);
        sleep(5);
        console.log("Store should be updated :" + displayName);
        let newPermissions = utils.storeWithPermissionsForEveryone();
        let respUpdate = common.updatePermissionsInUserStore(baseUrl, displayName,key,newPermissions,true);
        check(respUpdate, {
            "status is 200": (respUpdate) => {
               return respUpdate.status === 200;
            },
            "content-type is application/json": (resp) => resp.headers['Content-Type'] === "application/json",
            "transaction time OK": (resp) => {
               return resp.timings.duration < 700;
            }
        });
        updateUserStoreMetric.add(respUpdate.timings.duration);
        sleep(10);
    })
};
