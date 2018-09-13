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

export function installApp(baseUrl, appUrl, debug) {
    let url = utils.installAppUrl(baseUrl);
    let payload = utils.payloadForInstallApp(appUrl);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Install application: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function uninstallApp(baseUrl, key, debug) {
    let url = utils.uninstallAppUrl(baseUrl);
    let payload = utils.payloadForUninstallApp(key);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Uninstall application: status=" + String(res.status) + "  Body=" + res.body);
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

export function deleteUser(baseUrl, displayName, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForDeleteSystemUser(displayName);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Delete User action: status=" + String(res.status) + "  Body=" + res.body);
    }
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

export function deleteRole(baseUrl, displayName, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForDeleteRole(displayName);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Delete Role action: status=" + String(res.status) + "  Body=" + res.body);
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

export function deleteSystemGroup(baseUrl, displayName, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForDeleteSystemGroup(displayName);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Delete Group action: status=" + String(res.status) + "  Body=" + res.body);
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

export function addMembersToRole(baseUrl, displayName, members, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForAddMembersToRole(displayName, members);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Updating of the Role: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function createUserStore(baseUrl, displayName, key, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForCreateUserStore(displayName, key);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Creating of User Store: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function updatePermissionsInUserStore(baseUrl, displayName, key, permissions, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForUpdatePermissionsInUserStore(displayName, key, permissions);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Update User Store action: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function deleteUserStore(baseUrl, key, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForDeleteUserStore(key);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Delete User Store action: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function addMembershipsToUser(baseUrl, displayName, email, memberships, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForAddMembershipsToUser(displayName, email, memberships);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        console.log("Update User action: status=" + String(res.status) + "  Body=" + res.body);
    }
    return res;
}

export function aggregateRoles(baseUrl, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForAggregate(["ROLE"]);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        let body = JSON.parse(res.body);
        console.log("Aggregate Roles action: status=" + String(res.status) + "  totalCount=" + body.data.userItemsConnection.totalCount);
    }
    return res;
}

export function filterItemsByName(baseUrl, name, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForFilterUserItems(name);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        let body = JSON.parse(res.body);
        console.log("Filter user items action: status=" + String(res.status) + "  totalCount=" + body.data.userItemsConnection.totalCount);
    }
    return res;
}

export function aggregateRolesAndUsers(baseUrl, debug) {
    let url = utils.userUrl(baseUrl);
    let payload = utils.payloadForAggregate(["ROLE", "USER"]);
    let res = http.post(url, payload, utils.defaultParams());
    if (typeof debug !== 'undefined') {
        let body = JSON.parse(res.body);
        console.log("Aggregate Roles and Users action: status=" + String(res.status) + "  totalCount=" +
                    body.data.userItemsConnection.totalCount);
    }
    return res;
}

