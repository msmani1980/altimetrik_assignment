## MERN Login Signup Component

Minimalistic, ready-to-use component for Sessions based Login and Sign-Up using Reactjs, Redux, Bootstrap Node.js + Express and MongoDB, can be used as a starting point for another project that needs authentication.

## Features

- Login page with success/error messages
- Register page with success/error messages
- Protected Profile page route that needs authentication to access
- Persistence achieved using Sessions, with session ID stored on Cookie
- Logout deletes session in database and cookie from browser
- Fully responsive across Desktop, Tablet and Mobile


## Prerequisites

- Node.js
- NPM
- React
- MongoDB Atlas MongoURI
- **.env file with ENV variables**, a .env template is provided

## Quick Start

Clone the repository

```
https://github.com/msmani1980/altimetrik_assignment.git
```

Install packages for Node backend

```
 cd mern-login-signup-component
 npm install
```

Install packages for React client

```
 cd mern-login-signup-component/client
 npm install
```

Start Dev Server ( both React server and Nodejs server )

```
 npm run dev
```

```
    Folder Structure 
```
client
    node_modules
    public
    src
        actions
            authActions.js
            StatusActions.js
            types.js
            uiActions.js
        components
            HomePage.js
            Login.js
            Profile.js
            Register.js
            style.css
        reducers
            authReducer.js
            index.js
            statusReducer.js
            uiReducer.js
        App.css
        App.js
        App.test.js
        index.js
        store.js
    .dockerignore
    .gitignore
    dockerfile
    nginx.conf
    package.json
config
    config.js
    database.js
controller
    AuthController.js
models
    User.js
node_modules
routes
    Users.js
utils
    rateLimiter.js
    userValidations.js
.dockeignore
.env
.gitignore
docker-compose-prod.yml
docker-compose.yml
dockerfile
package.json
server.js


