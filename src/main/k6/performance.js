import {check, group, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
// import * as common from "./common.js";
import * as utils from "./utils.js";

export let options = {
    stages: [
        {duration: "3s", target: "7"},
        {duration: "7s", target: "7"},
        {duration: "3s", target: "0"}
    ],
    thresholds: {
        "content_get": ["avg<30"],
        "content_image": ["avg<50"],
        "create_folder": ["avg<70"],
        "http_req_duration": ["p(95)<10000", "avg<5000"],
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

// const baseUrl = 'https://qa.enonic.com/admin/rest';
const baseUrl = 'http://127.0.0.1:8080/admin/rest';
const loginMetric = new Trend("auth_login");
const isAuthenticatedMetric = new Trend("auth_authenticated");
const getImageMetric = new Trend("content_get_image");
const getContentMetric = new Trend("content_get_folder");
const createFolderMetric = new Trend("content_create_folder");
const updateFolderMetric = new Trend("content_update_folder");
const deleteFolderMetric = new Trend("content_delete_folder");

export function testUrl(url, payload, metric, contentType) {
    let res = '';
    if (payload == null) {
        console.log('GET: ' + url);
        res = http.get(url);
    } else {
        console.log('POST: ' + url);
        res = http.post(url, payload, {headers: {"Content-Type": "application/json"}});
    }

    check(res, {
        "status is 200": (res) => res.status === 200,
        ["content-type is " + contentType]: (res) => res.headers['Content-Type'] === contentType,
    });
    metric.add(res.timings.duration);

    if (res.status === 200) {
        console.log("Response status: " + res.status);
    } else {
        console.log("Response error: " + res.status);
        console.log(" - with url: " + url);
        console.log(" - with payload: " + payload);
        console.log(" - with response: " + res.body);
    }

    if (contentType === "application/json") {
        let body = JSON.parse(res.body);
        console.log(body.id + ' / Name: ' + body.name);
        return body.id;
    }

    // Display result to console (remove this code for real tests):
    // if (logJson) {
    //     let body = JSON.parse(res.body);
    //     let text = '';
    //     for (let key in body.data) {
    //         text += 'Index is: ' + key + '\nDescription is:  ' + JSON.stringify(body.data[key]) + '\n'
    //     }
    //     console.log("ID: " + body.id);
    //     console.log(text);
    // }
}

export function testUsersUrl(url, payload, metric) {
    let res = '';
    let contentType = "application/json";
    if (payload == null) {
        console.log('GET: ' + url);
        res = http.get(url);
    } else {
        console.log('POST: ' + url);
        res = http.post(url, payload, {headers: {"Content-Type": contentType}});
    }

    console.log("Login: status=" + String(res.status) + "  Body=" + res.body);

    check(res, {
        "status is 200": (res) => res.status === 200,
        ["content-type is " + contentType]: (res) => res.headers['Content-Type'] === contentType,
    });
    metric.add(res.timings.duration);

    let body = JSON.parse(res.body);
    if (body.authenticated === true) {
        console.log("User is authenticated: " + body.user.displayName + " - E-mail:" + body.user.email);
        return true;
    } else {
        console.log("Login failed");
        return false;
    }
}

export default function () {
    testUsersUrl(utils.loginUrl(baseUrl), utils.payloadForLogin("pt@enonic.com", "PTpt123"), loginMetric);
    sleep(1);
    group("load_resources", function () {
        testUsersUrl(baseUrl + "/auth/authenticated", null, isAuthenticatedMetric);
        sleep(1);

        // Get Image
        // testUrl(baseUrl + '/content/image/b46bbf33-f8d8-4146-a804-a58e78cc05f8?size=1213&ts=1528462056606', null, getImageMetric, "image/jpeg");  // QA
        testUrl(baseUrl + '/content/image/6f86f950-324f-46ef-ab59-e18f7ab76527?size=1258', null, getImageMetric, "image/jpeg");  // localhost
        sleep(1);

        let testCounter = Math.floor((Math.random() * 1000000000) + 1);
        // Create folder
        let contentId = testUrl(utils.createContentUrl(baseUrl), JSON.stringify({data: [], meta: [], displayName: "My Folder", parent: '/test', name: 'folder-' + testCounter, contentType: "base:folder", requireValid: false}), createFolderMetric, "application/json");
        // Get content
        testUrl(baseUrl + '/content?id=' + contentId, null, getContentMetric, "application/json" );
        // Update folder
        testUrl(utils.updateContentUrl(baseUrl), utils.payloadForUpdateFolder(contentId, 'folder-' + testCounter, 'New folder (' + testCounter + ')', utils.anonymousPermissions()), updateFolderMetric, "application/json");
        sleep(1);

        testUrl(utils.deleteContentUrl(baseUrl), utils.payloadForDeleteContent(["/test/folder-" + testCounter]), deleteFolderMetric, "application/json");
        sleep(1);
        // Publish folder
    })
};
