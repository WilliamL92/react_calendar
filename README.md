# React calendar

This is a react calendar katas project for the eXalt company build with React and Jest

## How this app is working

It should take a JSON file input in the src folder of the project like below:

`react_calendar -> src -> entry.json `

The JSON structure from the JSON file array must be like:

```
{
    "id": 1,
    "start": "17:00",
    "duration": 60
}
```

This structure is filtered inside the convertArray function available in `react_calendar -> src -> functions -> functions.js`

It should output a JSON object array with this structure:

```
{
    id: 1,
    col: 0,
    humanStart: "09:30",
    humanDuration: 30,
    computerStart: 9.5,
    computerDuration: 0.5,
    x: 25, // the position x of the event in screen percent
    y: 10, // the position y of the event in screen percent
    width: 25, // the width of the event in screen percent
    height: 15 // the height of the event in screen percent
}
```

And rendering on a web browser all the event from the JSON output array, this should be between 9am and 9pm

## Quick start

This advices will help you to start the project in a clean environment, you need to :

    * Have NodeJS installed locally
    * Clone this repo in your local environment
    * Open up a terminal and navigate to the project root folder and Write npm install or npm i

## Executing the app

    * Open up a terminal and navigate to the project root folder
    * write npm start in your terminal

A new window should be open in your web browser

## Executing the tests

    * Open up a terminal and navigate to the project root folder
    * write npm run test in your terminal

## Clean code usage

    * Using the JSDocs synthax for a better reading and coding experience
    * Using the concept of functions with single responsibility
    * Favoring the inline return function to have fewer lines of code
    * Favor a component-oriented code structure

## Reporting issue

A few event are on the wrong column, the function need to be upgraded
