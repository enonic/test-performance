// This test requires Superhero app to be installed, and that a folder "Test" is placed in the root of the Superhero structure.
// All actions are done inside the /superhero/test folder.
// Also, the test logs in to the admin console as "pt@enonic.com".  Make sure this user exist with the right password.

import {check, group, sleep} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";
import * as utils from "./utils.js";

export let options = {
    stages: [
        {duration: "100s", target: "200"},
        {duration: "20s", target: "0"}
    ],
    thresholds: {
        "content_get": ["avg<30"],
        "content_image": ["avg<50"],
        "create_folder": ["avg<70"],
        "http_req_duration": ["p(95)<5000", "avg<3000"],
        "http_req_connecting": ["max<25"]
    },
    ext: {
        loadimpact: {
            projectID: 3114611,
            name: "K6 performance research",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:sg:singapore", percent: 50},
                scenarioLabel2: {loadZone: "amazon:us:ashburn", percent: 50}
            }
        }
    }
};

// const baseUrl = 'https://qa.enonic.com/admin/rest';
const baseUrl = 'https://cluster-test.enonic.cloud/admin/rest';
const loginMetric = new Trend("auth_login");
const isAuthenticatedMetric = new Trend("auth_authenticated");
const getImageMetric = new Trend("content_get_image");
const getContentMetric = new Trend("content_get_folder");
const createFolderMetric = new Trend("content_create_folder");
const createContentMetric = new Trend("content_create");
const updateFolderMetric = new Trend("content_update_folder");
const publishFolderMetric = new Trend("content_publish_folder");
const publishContentMetric = new Trend("content_publish");
const deleteFolderMetric = new Trend("content_delete_folder");

function payloadForCreateSuperHeroPost(name, displayName, testCounter, parentFolder, permissions) {
    let payloadData = [
        {"name": "post", "type": "String", "values": [{"v": "<p>This is " + testCounter + " text!</p>\n"}]},
        {"name": "tags", "type": "String", "values": [{"v": "SH-" + testCounter}]},
        {"name": "enableComments", "type": "Boolean", "values": [{"v": true}]},
        {"name": "stickyPost", "type": "Boolean", "values": [{"v": true}]},
        {"name": "slideshow","type": "Boolean","values": [{"v": false}]}
    ];
    let payloadMeta = [
        {
            "data": [{"name": "menuItem", "type": "Boolean", "values": [{"v": false}]}, {"name": "menuName", "type": "String", "values": [{}]}],
            "name": "com.enonic.app.superhero:menu-item"
        }];
    let body = {data: payloadData, meta: payloadMeta, displayName: displayName, parent: parentFolder, name: name, contentType: "com.enonic.app.superhero:post", requireValid: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}

function payloadForUpdateSuperHeroPost(id, newContentName, newDisplayName, testCounter, permissions) {

}

function testUrl(url, payload, metric, contentType, debug) {
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

    if (typeof debug !== 'undefined') {
        if (res.status === 200) {
            console.log("Response status: " + res.status);
            // console.log("Proto: " + res.proto);
            // console.log("Subproto: " + res.subproto);
            // console.log("Method: " + res.method);
            // console.log("Url: " + res.url);
            // console.log("Name: " + res.name);
            // console.log("Group: " + res.group);
            // console.log("Check: " + res.check);
            // console.log("Error: " + res.error);
            // console.log("TLS_version: " + res.tls_version);
            console.log("VU: " + __VU);
            console.log("Iteration no: " + __ITER);
            // console.log(`VU: ${__VU}  -  ITER: ${__ITER}`);
        } else {
            console.log("Response error: " + res.status);
            console.log(" - with url: " + url);
            console.log(" - with payload: " + payload);
            console.log(" - with response: " + res.body);
        }
    }


    if (contentType === "application/json") {
        let body = JSON.parse(res.body);
        if (typeof body.id !== 'undefined') {
            console.log(body.id + ' / Name: ' + body.name);
        } else {
            console.log("Body: " + res.body);
        }
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

function testUsersUrl(url, payload, metric, debug) {
    let res = '';
    let contentType = "application/json";
    if (payload == null) {
        console.log('GET: ' + url);
        res = http.get(url);
    } else {
        console.log('POST: ' + url);
        res = http.post(url, payload, {headers: {"Content-Type": contentType}});
    }

    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }

    check(res, {
        "status is 200": (res) => res.status === 200,
        ["content-type is " + contentType]: (res) => res.headers['Content-Type'] === contentType,
    });
    metric.add(res.timings.duration);

    let body = JSON.parse(res.body);
    if (body.authenticated === true) {
        if (typeof debug !== 'undefined') {
            console.log("User is authenticated: " + body.user.displayName + " - E-mail:" + body.user.email);
            // console.log("Body: " + res.body);
        }
        return true;
    } else {
        console.log("Login failed: " + body);
        return false;
    }
}

export default function () {
    testUsersUrl(utils.loginUrl(baseUrl), utils.payloadForLogin("pt@enonic.com", "PTpt124#tp"), loginMetric);

    group("test_contentstudio", function () {
        // Verify that user is authenticated:
        testUsersUrl(baseUrl + "/auth/authenticated", null, isAuthenticatedMetric);

        // Get Image
        // testUrl(baseUrl + '/content/image/b46bbf33-f8d8-4146-a804-a58e78cc05f8?size=1213&ts=1528462056606', null, getImageMetric, "image/jpeg");  // QA
        // testUrl(baseUrl + '/content/image/be1ca151-cf61-4a54-9ea4-c8d01ce83e0e?size=1069', null, getImageMetric, "image/jpeg");  // localhost
        testUrl(baseUrl + '/content/image/098a6549-9fe7-4027-8756-f7fd4254e43a?size=1069', null, getImageMetric, "image/jpeg");  // cluster-test.enonic.cloud
        sleep(1);

        let testCounter = Math.floor((Math.random() * 1000000000) + 1);

        // Folder:
        // Create
        let contentFolderId = testUrl(utils.createContentUrl(baseUrl), JSON.stringify({data: [], meta: [], displayName: "New Folder", parent: '/superhero/test', name: 'folder-' + testCounter, contentType: "base:folder", requireValid: false}), createFolderMetric, "application/json");
        // Get
        testUrl(baseUrl + '/content?id=' + contentFolderId, null, getContentMetric, "application/json", true );
        sleep(1);
        // Update
        testUrl(utils.updateContentUrl(baseUrl), utils.payloadForUpdateFolder(contentFolderId, 'folder-' + testCounter, 'Folder no: ' + testCounter, utils.anonymousPermissions()), updateFolderMetric, "application/json");
        // Publish
        testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentFolderId]), publishFolderMetric, "application/json");
        sleep(1);

        // Custom content:
        // Create
        let contentId = testUrl(utils.createContentUrl(baseUrl), payloadForCreateSuperHeroPost("post-" + testCounter, "Post-" + testCounter, testCounter, "/superhero/test/folder-" + testCounter), createContentMetric, "application/json");
        // Publish
        testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentId]), publishContentMetric, "application/json");
        sleep(1);

        // Upload Image to folder

        testUrl(utils.deleteContentUrl(baseUrl), utils.payloadForDeleteContent(["/superhero/test/folder-" + testCounter]), deleteFolderMetric, "application/json");
        sleep(1);
        testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentFolderId]), publishFolderMetric, "application/json");
        sleep(1);
    });

    // group("test_users", function () {
    //
    // })
};
