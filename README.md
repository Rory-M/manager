# React-native project bootstrap

---
## Create project

react-native init manager

---
## Change to project folder

cd manager

---
## Install dependencies

### General 

* npm install --save react-redux redux
* npm install --save redux-thunk
* npm install --save react-native-router-flux

### Firebase

* npm install --save firebase

### Create a user

- Create project on https://console.firebase.google.com
- Setup email authentication
- Copy web app configuration and include in project

---
## Run

react-native run-ios

---
## Reset

This might be related to https://github.com/facebook/react-native/issues/4968

To resolve try the following:

1. Clear watchman watches: `watchman watch-del-all`.
2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.  
4. Remove haste cache: `rm -rf /tmp/haste-map-react-native`

---
