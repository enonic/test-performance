import {check, sleep} from "k6";
import http from "k6/http";

export let options = {
    stages: [
        { duration: "5s", target: "25" },
        { duration: "10s", target: "25" },
        { duration: "5s", target: "0" }
    ],
    thresholds: {
        "failed requests": ["rate<0.1"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
        "http_req_connecting": ["max<3"]
    },
    ext: {
        loadimpact: {
            projectID : 3114611,
            name : "K6 experiments",
            distribution: {
                scenarioLabel1: { loadZone: "amazon:kr:seoul", percent: 50 },
                scenarioLabel2: { loadZone: "amazon:ie:dublin", percent: 50 }
            }
        }
    }
};

export default function() {
	let res = http.get("http://cluster-test.enonic.cloud/");

        check(res, { "Is status 200": (r) => r.status === 200});

	sleep(2);
};
