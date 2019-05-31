# TypeScript, React, Redux, Sass, Webpack Application

* SPA with React and Redux using TypeScript
* Sass preprocessor
* Tests with Jest and Enzyme
* Webpack as module bundler
* Forked from https://github.com/Microsoft/TypeScript-React-Redux-Starter without Auth

# Install python

node-sass uses python, so please install python using

```shell
npm --add-python-to-path='true' --debug install --global windows-build-tools
```

# Running application locally

```shell
npm install
```
NOTE: Without performing Install python step, npm install would fail

```shell
npm run build:dev
```

```shell
npm run start
```
NOTE: Will start the application in localhost:3001 using webpack dev server

# Testing the project

Updating snapshot
```shell
npm run test:update-snapshot
```

```shell
npm run test
```