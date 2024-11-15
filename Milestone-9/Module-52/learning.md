## Module-52 => Build Dragon News Website

-- Clear Concept of fileBase --

### OAuth and authentication process explanation
1. What is Firebase?
- A product of google
- Helps developers to build apps faster and securely
- No programming is required on the firebase side which makes it easy to use its features more efficiently
- Provides services to anroid ,iso,web unity.Its provides cloud stroage
- Uses NoSQL for the database for the stroage data

2. what is firebase SDK ?
- software development kit একটা Package
- The SDKs provided by firebase,drectly interact with backed services
- There is no need to establish any collection between the app and the service
- serverless arcitectures 

- Authentication standred => OAuth 2.0

## Principles of OAuth 2.0
- OAuth Is an Authorization protocol and not an authentication protocol
- Authentication verifies the identity of a user or service ,and authorization determines their access rights

### Firebase Authentication
- Once a user authenticates, 3 things happen:
1. Information about the user is returned to the application via callbacks to allow us to personalize our apps user experience for the specific user
2. The user imformation contains a uniqe ID which is guaranteed to be unique distict accross all provides
3. This unique ID is used to identify the user and what parts of the backend system they are authorized to access

## Some Firebase Reference
- initializeApp() => Creates and initializes a FirebaseApp instance
- FirebaseApp - A FirebaseApp holds the initialization information for a collection of services
- getAuth(app) => Returns the Auth instance associated with the provided FirebaseAPp.If no instance exists,initializes an Auth instance with platform-specific default dependencies
- OAuthProvider - Provider for generating generic OAuthCredential
- OAuthCredential - specify the details about each auth providers crefential requerments