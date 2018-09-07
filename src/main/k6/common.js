//
// This file contains methods, that are common to all the individual test cases.
//

import http from "k6/http";
import * as utils from "./utils.js";

export function xp_login(username, password, baseUrl, debug) {
    let res = http.post(utils.loginUrl(baseUrl), utils.payloadForLogin(username, password), utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Login: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function createFolder(name, baseUrl, debug) {
    let url = utils.createContentUrl(baseUrl);
    let payload = utils.payloadForCreateRootFolder(name, "My folder");
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Create folder: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function createUser(name, email, password, baseUrl, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForCreateUser(name, email, password);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Create User: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function deleteUser(baseUrl, displayName) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForDeleteSystemUser(displayName);
    let res = http.post(url, payload, utils.defaultParams());
    return res;
}

export function createRole(baseUrl, displayName, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForCreateRole(displayName);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Create Role: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function createSystemGroup(baseUrl, displayName, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForCreateSystemGroup(displayName);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Create Group: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function addMembersToSystemGroup(baseUrl, displayName, members, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForAddMembersToSystemGroup(displayName, members);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Updating of the Group: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function createUserStore(baseUrl, displayName, key, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForCreateUserStore(displayName,key);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Creating of User Store: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

