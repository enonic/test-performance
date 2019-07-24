import {group, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as utils from "./utils.js";

export let options = {
    stages: [
        {duration: "1s", target: "1"},
        {duration: "3s", target: "1"},
        {duration: "1s", target: "0"}
    ],
    thresholds: {
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

const baseUrl = 'http://127.0.0.1:8080/admin/rest';
const createUserMetric = new Trend("create_user");
const createFolderMetric = new Trend("create_folder");


export default function () {
    group("create_user", function () {

        let url = 'http://localhost:8080/admin/tool/_/idprovider/system';
        let payload = {action: "createAdminUser", user: "pt", email: "pt@enonic.com", password: "PTpt124#tp"};
        utils.testUrl(url, payload, createUserMetric, "application/json", true, true);
        sleep(1);
    });

    group("create-folder", function () {

        utils.testUrl(utils.loginUrl(baseUrl), utils.payloadForLogin("pt@enonic.com", "PTpt124#tp"));

        let payload = {data: [], meta: [], displayName: "Test Folder", parent: '/superhero', name: 'test', contentType: "base:folder", requireValid: false};
        utils.testUrl(utils.createContentUrl(baseUrl), payload, createFolderMetric, "application/json", true, true);
        sleep(60);
    });
};
