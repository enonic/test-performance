//
// This file contains defaults and data that is common to all the individual test cases.
//

export function createContentUrl(baseUrl){
    return baseUrl+ '/content/create/';
}
export function updateContentUrl(baseUrl){
    return baseUrl+ '/content/update/';
}

// create a JSON string for the request's body for creating new folder in root directory
export function requestBodyForCreateRootFolder(name, displayName, permissions) {
    let body = {data: [], meta: [], displayName: displayName, parent: '/', name: name, contentType: "base:folder", requireValid: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}

export function requestBodyForUpdateFolder(id, contentName, newDisplayName, permissions) {
    let body = {contentId: id, data: [], meta: [], contentName: contentName, displayName: newDisplayName, inheritPermissions: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}

// create Full Access permissions for Anonymous User
export function anonymousPermissions() {
    let perm = [
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
    return perm;
}