# An Interview Scheduler

### https://scheduler-ujay.netlify.app/

## A REACT app made using complex data flow and API to learn/demonstrate working with full stack React App while doing project testing using multiple different platforms!

Scheduler is an app that allower a fictitious user to manage interviews between students and interviewers. User can create,edit,delete interview appointments and each day tab dynamically updates available spots as user proceeds.
<br />
<br />
This is a Full-stack, fully functional app that has been deployed on **Netlify** using production version on Github. Netlify will serve static client assets, and **CircleCI** is used to manage continuous integration process. API is served from **Heroku** where my database is hosted using Heroku PostGres addon.

Multiple libraries and frameworks were used/learned in making of this project.
<br />
<br />
Learning to test as project progresses has been the moto since day one. This app has been tested using all 4 programming testing ideology: unit, static, integration and end-to-end. This allowed us to learn different stages of testing and QA and understand the importance of which testing to be done under which circumstances. Some snapshots of testing can be found below.

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

| !["App "](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/app_flow.gif?raw=true) |
| :--------------------------------------------------------------------------------------------: |
|                                             _App_                                              |

| !["Unit Testing using Storybook"](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/storybook.png?raw=true) |
| :---------------------------------------------------------------------------------------------------------------------: |
|                                                      _Story Book_                                                       |

| !["Integration test overview from Jest"](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/jest.png?raw=true) |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                                          _Jest_                                                           |

| !["End-to-End using Cypress"](https://github.com/ujjawalsidhpura/scheduler/blob/master/docs/cypress.png?raw=true) |
| :---------------------------------------------------------------------------------------------------------------: |
|                                                     _Cypress_                                                     |

| !["Continous Production Pipeline Using CircleCI"](https://github.com/ujjawalsidhpura/scheduler/blob/production/docs/circleCi.png?raw=true) |
| :----------------------------------------------------------------------------------------------------------------------------------------: |
|                                               _Continous Production Pipeline Using CircleCI_                                               |

| !["Production Flow"](https://github.com/ujjawalsidhpura/scheduler/blob/production/docs/Production%20Flow.png?raw=true) |
| :--------------------------------------------------------------------------------------------------------------------: |
|                                                   _Production Flow_                                                    |

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

## Production Deployed

- GitHub
- CircleCI
- Heroku
- Netlify

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
