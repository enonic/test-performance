//
// This file contains methods, that generate and build payloads, URLs...
//

export function createContentUrl(baseUrl) {
    return baseUrl + '/content/create/';
}

export function updateContentUrl(baseUrl) {
    return baseUrl + '/content/update/';
}

export function publishContentUrl(baseUrl) {
    return baseUrl + '/content/publish/';
}

export function deleteContentUrl(baseUrl) {
    return baseUrl + '/content/delete/';
}

export function loginUrl(baseUrl) {
    return baseUrl + "/auth/login";
}

export function defaultParams() {
    return {headers: {"Content-Type": "application/json"}}
}

export function payloadForLogin(username, password) {
    let payload = {user: username, password: password};
    return JSON.stringify(payload);
}

// create a JSON string for the request's body for creating new folder in root directory
export function payloadForCreateRootFolder(name, displayName, permissions) {
    let body = {data: [], meta: [], displayName: displayName, parent: '/', name: name, contentType: "base:folder", requireValid: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}

export function payloadForUpdateFolder(id, contentName, newDisplayName, permissions) {
    let body = {contentId: id, data: [], meta: [], contentName: contentName, displayName: newDisplayName, inheritPermissions: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}
// payload for 'offline'-folder
export function payloadForDeleteContent(contentPaths) {
    let payload = {contentPaths: contentPaths, deleteOnline: false};
    return JSON.stringify(payload);
}

export function payloadForPublishContent(ids) {
    let body = {ids: ids, excludedIds: [], excludeChildrenIds: ids, schedule: null};
    return JSON.stringify(body);
}

// create Full Access permissions for Anonymous User
export function anonymousPermissions() {
    return [
        {
            principal: {key: "user:system:anonymous", displayName: "Anonymous User"},
            allow: [
                "READ",
                "CREATE",
                "MODIFY",
                "DELETE",
                "PUBLISH",
                "READ_PERMISSIONS",
                "WRITE_PERMISSIONS"
            ],
            deny: []
        }
    ]
}