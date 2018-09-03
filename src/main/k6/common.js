//
// This file contains methods, that are common to all the individual test cases.
//


import http from "k6/http";
import * as utils from "./utils.js";

export function xp_login(username, password, baseUrl, debug) {
    let url = "http://127.0.0.1:8080/admin/rest/auth/login";

    let res = http.post(utils.loginUrl(baseUrl), utils.payloadForLogin(username, password), utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
};

export function createFolder(name, baseUrl, debug) {
    let url = utils.createContentUrl(baseUrl);
    let payload = utils.payloadForCreateRootFolder(name, "My folder");
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}
