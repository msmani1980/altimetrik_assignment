## Login Signup Component

Login and Sign-Up using Reactjs, Redux, Bootstrap Node.js + Express and MongoDB

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

 ## Folder Structure 
    
````
├── ...
├── Client                    # Reactjs application folder
│   ├── src  
         ├──actions           # Redux actions files  
         ├──components        # Reacjs UI components  
         ├──reducers          # Reducers       
   ├── public
   ├── config                 # Database and host information  
   ├── controllers            # Auth controllers  
   ├── models                 # Schema files     
   ├── routes                 # routers information  
   └── Utils                  # UI Vavlidation and number...  

`````
