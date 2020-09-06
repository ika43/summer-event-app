# Summer events APP

---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node


- #### Installation
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

## Setup
    rename env.sample file to .env
    $ npm install

## Running the project
    $ npm start

## Run test
    $ npm test

## Docker build for development
    $ docker build -t <your username>/summer-event-app .
    $ docker run -it --rm -p 3000:3000 -d <your username>/summer-event-app

## Docker build for production mode
    $ docker-compose -f docker-compose.prod.yml up -d --build


