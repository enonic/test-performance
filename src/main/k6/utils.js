//
// This file contains methods, that generate and build payloads, URLs...
//

export function userUrl(baseUrl) {
    return baseUrl + '/tool/com.enonic.xp.app.users/main/_/service/com.enonic.xp.app.users/graphql';
}

export function createContentUrl(baseUrl) {
    return baseUrl + '/content/create/';
}

export function installAppUrl(baseUrl) {
    return baseUrl + '/application/installUrl';
}
export function uninstallAppUrl(baseUrl) {
    return baseUrl + '/application/uninstall';
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

export function payloadForInstallApp(url) {
    let body = {URL: url};
    return JSON.stringify(body);
}
export function payloadForUninstallApp(key) {
    let body = {key: key};
    return JSON.stringify(body);
}

// creates a JSON string for the request's body for creating new folder in root directory
export function payloadForCreateRootFolder(name, displayName, permissions) {
    let body = {data: [], meta: [], displayName: displayName, parent: '/', name: name, contentType: "base:folder", requireValid: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}

export function payloadForDeleteSystemUser(displayName) {
    const mutation = `mutation ($keys: [String]!) {
    deletePrincipals(keys: $keys) {
        principalKey
        deleted
        reason
    }
}`;
    const variables = {
        keys: [`user:system:${displayName}`],
    };
    return JSON.stringify({mutation, variables});
}

// creates a JSON string for the request's body for creating new user in system store
export function payloadForCreateUser(displayName, email, password) {
    const mutation = `mutation ($key: String!, $displayName: String!, $email: String!, $login: String!, $password: String!, $memberships: [String]) {
            createUser(key: $key, displayName: $displayName, email: $email, login: $login, password: $password, memberships: $memberships) {
                key
                login
                displayName
                email
                memberships {
                    key
                    displayName
                    description
                }
            }
        }`;
    const variables = {
        type: 'user',
        login: displayName,
        userStore: 'system',
        displayName: displayName,
        email: email,
        key: `user:system:${displayName}`,
        memberships: [],
        password: password
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForCreateRole(displayName) {
    const mutation = `mutation ($key: String!, $displayName: String!, $description: String, $members: [String]) {
            createRole(key: $key, displayName: $displayName, description: $description, members: $members) {
                key
                displayName
                description
                members 
            }
        }`;
    const variables = {
        displayName: displayName,
        key: `role:${displayName}`,
        members: [],
        description: ''
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForCreateImage(name, displayName, testCounter, parentFolder, permissions) {

}

export function payloadForCreateSuperHeroPost(name, displayName, testCounter, parentFolder, permissions) {
    let payloadData = [
        {"name": "post", "type": "String", "values": [{"v": "<p>This is " + testCounter + " text!</p>\n"}]},
        {"name": "tags", "type": "String", "values": [{"v": "SH-" + testCounter}]},
        {"name": "enableComments", "type": "Boolean", "values": [{"v": true}]},
        {"name": "stickyPost", "type": "Boolean", "values": [{"v": false}]},
        {"name": "slideshow", "type": "Boolean","values": [{"v": true}]},
        {"name": "author", "type": "Reference", "values": [{"v": "22354f06-b64e-48d8-959d-da5f8c27a424"}]},
        {"name": "category", "type": "Reference", "values": [{"v": "e656bc02-10dd-45b1-b30f-c9deef28aa6f"}, {"v": "11b7c8c5-5633-47d3-a488-9c4d5060b690"}]}
    ];
    // let payloadMeta = [
    //     {
    //         "data": [{"name": "menuItem", "type": "Boolean", "values": [{"v": false}]}, {"name": "menuName", "type": "String", "values": [{}]}],
    //         "name": "com.enonic.app.superhero:menu-item"
    //     }];
    let payloadMeta = [];
    let body = {data: payloadData, meta: payloadMeta, displayName: displayName, parent: parentFolder, name: name, contentType: "com.enonic.app.superhero:post", requireValid: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    // console.log('SuperHero payload: ' + JSON.stringify(body));
    return JSON.stringify(body);
}

export function payloadForDeleteRole(displayName) {
    const mutation = `mutation ($keys: [String]!) {
            deletePrincipals(keys: $keys) {
                principalKey
                deleted
                reason
            }
        }`;
    const variables = {
        keys: [`role:${displayName}`],
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForDeleteUserStore(key) {
    const mutation = `mutation ($keys: [String]!) {
            deleteUserStores(keys: $keys) {
                userStoreKey
                deleted
                reason
            }
        }`;
    const variables = {
        keys: [key],
    };
    return JSON.stringify({mutation, variables});

}

export function payloadForCreateUserStore(displayName, key) {
    const mutation = `mutation ($key: String!, $displayName: String!, $description: String, $authConfig: AuthConfigInput, $permissions: [UserStoreAccessControlInput]) {
            createUserStore(key: $key, displayName: $displayName, description: $description, authConfig: $authConfig, permissions: $permissions) {
                key
                displayName
                description
                authConfig {
                    applicationKey
                    config
                }
                idProviderMode,
                permissions {
                    principal {
                        displayName
                        key
                    }
                    access
                }
            }
        }`;
    const variables = {
        authConfig: {
            applicationKey: "com.enonic.xp.app.standardidprovider",
            config: "[]"
        },

        displayName: displayName,
        key: key,
        permissions: [{principal: "role:system.authenticated", access: "READ"},
            {principal: "role:system.admin", access: "ADMINISTRATOR"},
            {principal: "role:system.user.admin", access: "ADMINISTRATOR"}],
        description: 'test api'
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForUpdatePermissionsInUserStore(displayName, key, permissions) {
    const mutation = `mutation ($key: String!, $displayName: String!, $description: String, $authConfig: AuthConfigInput, $permissions: [UserStoreAccessControlInput]) {
            updateUserStore(key: $key, displayName: $displayName, description: $description, authConfig: $authConfig, permissions: $permissions) {
                key
                displayName
                description
                authConfig {
                    applicationKey
                    config
                }
                idProviderMode,
                permissions {
                    principal {
                        displayName
                        key
                    }
                    access
                }
            }
        }`;
    const variables = {
        authConfig: {
            applicationKey: "com.enonic.xp.app.standardidprovider",
            config: "[]"
        },

        displayName: displayName,
        key: key,
        permissions: permissions,
        description: 'test api'
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForAddMembersToRole(displayName, members) {
    const mutation = `mutation ($key: String!, $displayName: String!, $description: String!, $addMembers: [String], $removeMembers: [String]) {
            updateRole(key: $key, displayName: $displayName, description: $description, addMembers: $addMembers, removeMembers: $removeMembers) {
                key
                displayName
                description
                members
            }
        }`;
    const variables = {
        displayName: displayName,
        description: 'test',
        key: `role:${displayName}`,
        addMembers: members,
        removeMembers: [],
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForAddMembershipsToUser(displayName, email, memberships) {
    const mutation = `mutation ($key: String!, $displayName: String!, $email: String!, $login: String!, $addMemberships: [String], $removeMemberships: [String]) {
            updateUser(key: $key, displayName: $displayName, email: $email, login: $login, addMemberships: $addMemberships, removeMemberships: $removeMemberships) {
                key
                login
                displayName
                email
                memberships {
                    key
                    displayName
                    description
                }
            }
        }`;
    const variables = {
        displayName: displayName,
        addMemberships: memberships,
        key: `user:system:${displayName}`,
        email: email,
        login: displayName,
        removeMembers: [],
        removeMemberships: []
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForAddMembersToSystemGroup(displayName, members) {
    const mutation = `mutation ($key: String!, $displayName: String!, $description: String!, $addMembers: [String], $removeMembers: [String], $addMemberships: [String], $removeMemberships: [String]) {
            updateGroup(key: $key, displayName: $displayName, description: $description, addMembers: $addMembers, removeMembers: $removeMembers, addMemberships: $addMemberships, removeMemberships: $removeMemberships) {
                key
                displayName
                description
                members
                memberships {
                    key
                    displayName
                    description
                }
            }
        }`;
    const variables = {
        displayName: displayName,
        description: 'test',
        key: `group:system:${displayName}`,
        addMembers: members,
        removeMembers: [],
        addMemberships: [],
        removeMemberships: []
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForCreateSystemGroup(displayName) {
    const mutation = `mutation ($key: String!, $displayName: String!, $description: String, $members: [String], $memberships: [String]) {
        createGroup(key: $key, displayName: $displayName, description: $description, members: $members, memberships: $memberships) {
            key
            displayName
            description
            members
            memberships {
                key
                displayName
                description
            }
        }
    }`;
    const variables = {
        displayName: displayName,
        key: `group:system:${displayName}`,
        members: [],
        memberships: [],
        description: ''
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForDeleteSystemGroup(displayName) {
    const mutation = `mutation ($keys: [String]!) {
            deletePrincipals(keys: $keys) {
                principalKey
                deleted
                reason
            }
        }`;
    const variables = {
        keys: [`group:system:${displayName}`],
    };
    return JSON.stringify({mutation, variables});
}

export function payloadForUpdateFolder(id, contentName, newDisplayName, permissions) {
    let body = {contentId: id, data: [], meta: [], contentName: contentName, displayName: newDisplayName, inheritPermissions: false};
    if (permissions != undefined) {
        body.permissions = permissions;
    }
    return JSON.stringify(body);
}

// payload for delete a 'offline'-folder
export function payloadForDeleteContent(contentPaths) {
    // console.log("DEBUG (delete content): ##### PATH is :" + contentPaths[0]);
    let payload = {contentPaths: contentPaths, deleteOnline: false};
    return JSON.stringify(payload);
}

export function payloadForPublishContent(ids) {
    let body = {ids: ids, excludedIds: [], excludeChildrenIds: ids, schedule: null};
    return JSON.stringify(body);
}

export function payloadForFilterUserItems(query) {
    const mutation = `query($types: [UserItemType], $query: String, $start: Int, $count: Int) {
                    userItemsConnection (types: $types, query: $query, start: $start, count: $count) {
                        totalCount
                        edges {
                            node {
                                key,
                                name,
                                description,
                                displayName
                            }
                        }
                        aggregations {
                            name,
                            buckets {
                                key,
                                docCount
                            }
                        }
                    }
                }`;
    const variables = {
        query: query
    };
    return JSON.stringify({mutation, variables});
}


export function payloadForAggregate(types) {
    const mutation = `query($types: [UserItemType], $query: String, $start: Int, $count: Int) {
                    userItemsConnection (types: $types, query: $query, start: $start, count: $count) {
                        totalCount
                        edges {
                            node {
                                key,
                                name,
                                description,
                                displayName
                            }
                        }
                        aggregations {
                            name,
                            buckets {
                                key,
                                docCount
                            }
                        }
                    }
                }`;
    const variables = {
        types: types
    };
    return JSON.stringify({mutation, variables});
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

//return array of default permissions + permissions for everyone
export function storeWithPermissionsForEveryone() {
    return [{principal: "role:system.authenticated", access: "READ"},
        {principal: "role:system.admin", access: "ADMINISTRATOR"},
        {principal: "role:system.user.admin", access: "ADMINISTRATOR"},
        {principal: "role:system.everyone", access: "CREATE_USERS"}
    ]


}

export function inheritPermissions() {
    return {"inheritPermissions": true};
}