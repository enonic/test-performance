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
        "install_app": ["avg<10000"],
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID: 3114611,
            name: "install application performance test",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:kr:seoul", percent: 50},
                scenarioLabel2: {loadZone: "amazon:ie:dublin", percent: 50}
            }
        }
    }
};

const baseUrl = 'http://127.0.0.1:8080/admin/rest';
const installAppMetric = new Trend("install_app");

export default function () {
    common.xp_login("su", "password", baseUrl);
    group("install_app", function () {

        let appUrl = 'http://repo.enonic.com/public/com/enonic/app/chucknorris/2.0.0/chucknorris-2.0.0.jar';
        let res = common.installApp(baseUrl, appUrl, true);
        check(res, {
            "status is 200": (res) => res.status === 200,
            "content-type is application/json": (res) => res.headers['Content-Type'] === "application/json",
            "transaction time OK": (res) => {
                return res.timings.duration < 10000;
            }
        });
        sleep(10);
        let key = ["com.enonic.app.chucknorris"];
        let resUninstall = common.uninstallApp(baseUrl, key, true);
        installAppMetric.add(res.timings.duration);
        sleep(10);
    })
};
