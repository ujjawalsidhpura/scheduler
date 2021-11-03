# An Interview Scheduler

## A REACT app made using complex data flow and API to learn/demonstrate working with full stack React App while doing project testing using multiple different platforms!

Scheduler is an app that allower a fictitious user to manage interviews between students and interviewers. User can create,edit,delete interview appointments and each day tab dynamically updates available spots as user proceeds.
<br />
<br />
This is a full-stack app that has been divided into two repos. This repo is a Front-End repo that primarily uses REACT to handle complex structure of events and props. It allowed me to learn so many aspects of a fully functional full stack react webapp.
To find the repo that mimic backend server and provides API to the front end, please refer (https://github.com/lighthouse-labs/scheduler-api) in Github. Multiple libraries and frameworks were used/learned in making of this project.
<br />
<br />
Learning to test as project progress has been the moto since day one. This app has been tested using all 4 programming testing ideology: unit, static, integration and end-to-end. This allowed us to learn different stages of testing and QA and understand the importance of which testing to be done under which circumstances. Some snapshots of testing can be found below.

## Testing

### Static

ESlint

### Unit

Storybook

### Integration

Jest

### End-to-End

Cypress

## This is how Scheduler looks.

| !["App Flow "](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/app_flow.gif?raw=true) |
| :-------------------------------------------------------------------------------------------------: |
|                                             _App Flow_                                              |

| !["Unit Testing using Storybook"](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/storybook.png?raw=true) |
| :---------------------------------------------------------------------------------------------------------------------: |
|                                                      _Story Book_                                                       |

| !["Integration test overview from Jest"](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/jest.png?raw=true) |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                                          _Jest_                                                           |

| !["End-to-End using Cypress"](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/cypress.png?raw=true) |
| :---------------------------------------------------------------------------------------------------------------: |
|                                                     _Cypress_                                                     |

## Dependencies

- Axios
- babel-loader
- babel/core
- storybook/addon-actions
- storybook/addon-backgrounds
- storybook/addon-links
- storybook/addons
- storybook/react
- testing-library/jest-dom
- testing-library/react
- testing-library/react-hooks
- react-test-renderer
- cypress
- node-sass
- prop-types
- Webpack Dev Server

## Getting Started

## Setup

Install dependencies with `npm install`.

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Running Cypress

```sh
npm run cypress
```
