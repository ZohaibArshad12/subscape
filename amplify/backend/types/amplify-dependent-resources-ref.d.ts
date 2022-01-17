export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "cloutfrontend": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "cloutfrontend": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "gqls": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}