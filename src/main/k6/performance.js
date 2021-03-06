// This test requires Superhero app to be installed, and that a folder "Test" is placed in the root of the Superhero structure.
// All actions are done inside the /superhero/test folder.
// Also, the test logs in to the admin console as "pt@enonic.com".  Make sure this user exist with the right password.

import {check, group, sleep} from "k6";
import {Trend} from "k6/metrics";
import * as utils from "./utils.js";

export let options = {
    stages: [
        {duration: "25s", target: "100"},
        {duration: "150s", target: "140"},
        {duration: "25s", target: "0"}
    ],
    thresholds: {
        "http_req_connecting": ["avg<1", "p(95)<1"],
        "http_req_duration": ["avg<750", "p(95)<3500"],
        "auth_login": ["avg<250", "p(95)<600"],
        "auth_authenticated": ["avg<8", "p(95)<35"],
        "content_create_folder": ["avg<2300", "p(95)<4000"],
        "content_get_folder": ["avg<50", "p(95)<120"],
        "content_update_folder": ["avg<1000", "p(95)<2000"],
        "content_publish_folder": ["avg<12", "p(95)<60"],
        "content_create": ["avg<2200", "p(95)<4000"],
        "content_get": ["avg<50", "p(95)<250"],
        "content_update": ["avg<3300", "p(95)<5500"],
        "content_publish": ["avg<10", "p(95)<50"],
        "content_delete_folder": ["avg<10", "p(95)<45"],
        "content_publish_delete": ["avg<15", "p(95)<60"]
    },
    ext: {
        loadimpact: {
            projectID: 3465338,
            name: "XP nightly",
            distribution: {
                scenarioLabel1: {loadZone: "amazon:sg:singapore", percent: 50},
                scenarioLabel2: {loadZone: "amazon:us:ashburn", percent: 50}
            }
        }
    }
};

// const baseUrl = 'https://qa.enonic.com/admin/rest';
// const baseUrl = 'https://nightly.enonic.net/admin/rest';
const baseUrl = 'http://127.0.0.1:8080/admin/rest';

const loginMetric = new Trend("auth_login");
const isAuthenticatedMetric = new Trend("auth_authenticated");

const createFolderMetric = new Trend("content_create_folder");
const getFolderMetric = new Trend("content_get_folder");
const updateFolderMetric = new Trend("content_update_folder");
const publishFolderMetric = new Trend("content_publish_folder");

const createContentMetric = new Trend("content_create");
const getContentMetric = new Trend("content_get");
const updateContentMetric = new Trend("content_update");
const publishContentMetric = new Trend("content_publish");

const createImageMetric = new Trend("image_create");
const publishImageMetric = new Trend("image_publish");
const getImageMetric = new Trend("content_get_image");

const deleteFolderMetric = new Trend("content_delete_folder");
const publishDeleteMetric = new Trend("content_publish_delete");

export default function () {
    utils.testUrl(utils.loginUrl(baseUrl), utils.payloadForLogin("pt@enonic.com", "PTpt124#tp"), loginMetric);
    // console.log("Logged in");

    group("test_contentstudio", function () {
        // Verify that user is authenticated:
        utils.testUrl(baseUrl + "/auth/authenticated", null, isAuthenticatedMetric);

        let testCounter = Math.floor((Math.random() * 1000000000) + 1);
        let contentFolderId = "0";
        let contentId = "0";

        // Folder:
        group("create-folder", function () {
            contentFolderId = utils.testUrl(utils.createContentUrl(baseUrl),
                utils.payloadForCreateFolder('folder-' + testCounter, "New Folder", '/superhero/test'), createFolderMetric);
        });
        sleep(1);

        group("verify-folder", function () {
            utils.testUrl(utils.getContentUrl(baseUrl, contentFolderId), null, getFolderMetric);
        });

        group("update-folder", function () {
            utils.testUrl(utils.updateContentUrl(baseUrl),
                utils.payloadForUpdateFolder(contentFolderId, 'folder-' + testCounter, 'Folder no: ' + testCounter,
                    utils.anonymousPermissions()), updateFolderMetric);
        });
        sleep(1);

        group("publish-folder", function () {
            utils.testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentFolderId]), publishFolderMetric);
        });
        sleep(1);

        // Custom content:
        group("create-content", function () {
            contentId = utils.testUrl(utils.createContentUrl(baseUrl),
                utils.payloadForCreateSuperHeroPost("post-" + testCounter, "Post-" + testCounter, testCounter,
                    "/superhero/test/folder-" + testCounter),
                createContentMetric);
        });
        sleep(1);

        group("verify-content", function () {
            utils.testUrl(utils.getContentUrl(baseUrl, contentId), null, getContentMetric);
        });
        sleep(1);

        group("update-content", function () {
            utils.testUrl(utils.updateContentUrl(baseUrl),
                utils.payloadForUpdateSuperHeroPost(contentId, "Updated Post-" + testCounter, "Updated Name - " + testCounter, testCounter,
                    utils.anonymousPermissions()),
                updateContentMetric);
        });
        sleep(1);

        group("publish-content", function () {
            utils.testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentId]), publishContentMetric);
        });
        sleep(1);

        // group("create-image", function () {
        //     // Upload Image to folder
        //     contentImageId = testUrl(utils.createContentUrl(baseUrl), utils.payloadForCreateImage( "image-" + testCounter, "Image-" + testCounter, testCounter, "/superhero/test/folder-" + testCounter ), createImageMetric, "application/json")
        // });
        // sleep(1);
        //
        // // Publish custom content
        // group("publish-image", function () {
        //     testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentImageId]), publishImageMetric, "application/json");
        // });
        // sleep(1);
        //


        // Delete all:
        group("delete-folder-with-content", function () {
            utils.testUrl(utils.deleteContentUrl(baseUrl), utils.payloadForDeleteContent(["/superhero/test/folder-" + testCounter]),
                deleteFolderMetric);
        });
        sleep(1);

        group("publish-delete", function () {
            utils.testUrl(utils.publishContentUrl(baseUrl), utils.payloadForPublishContent([contentFolderId]), publishDeleteMetric);
        });
        sleep(1);
    });
};
