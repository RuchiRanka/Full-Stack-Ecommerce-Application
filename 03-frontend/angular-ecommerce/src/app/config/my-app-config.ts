export default {

    // clientId - public identifier for the client app
    // issuer - issuer of tokens, URL when authorizing with Okta Authorization Server
    // redirectUri - where to redirect to the user, once they log in
    // scopes - provide access to info about a user
    // openid - required for authentication requests
    // profile - user's first name, last name, phone, etc.
    // email - user's email address
    oidc: {
        clientId: '0oaap8hf7it1JO4cn5d7',
        issuer: 'https://dev-78207267.okta.com/oauth2/default',
        redirectUri: 'https://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }

}
