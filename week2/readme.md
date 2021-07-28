# Introduction
This is the second week of the NodeJS module, where we will focus on Express, which is an application architecture for building webservers in an easy manner. Although we could write everything from scratch in Node, we don’t want to. In many situations a webserver is generic enough for us and we gain a lot by using something that just works and makes our lives as developers easier – as long as what we are trying to do is within the scope of Express.

When writing an Express application we are registering routes on HTTP keywords (GET,POST,PUT, DELETE) and handler functions for those routes.

The most basic express webserver looks like the following

````
// We require the express package after having installed it 
// via “npm i express”
const express = require('express')

// We create an express instance and bind it to our app const
const app = express()

// We register the first route with the following;

// all “GET” requests on the path “/“
// will be handled by the function (req, res) {}
app.get('/',function (req, res) {

  // the handler receives the request on “req”
  // and has access to the response on “res”
  
  // res.send allows us to send a response to a request
  res.send('hello world')
  
})

// We start the express webserver by listening to port 3000
app.listen(3000)
````

If run the script, node will start up and run the code ending with app.listen(3000), app.listen will tell Node to bind and listen for connections on the specified host and port.

If there is no specified host, Node will bind to localhost and the Node application will be available on http://localhost:3000/

If you open that URL in the browser you will see “hello world” without any styling in your browser.

## Extensibility
This is a very basic example of an express application. There many parameters to tweak and cases to take into consideration.
On off the first thing we’d like to do in a typical Express application is not return strings or HTML, but instead use JSON as the transport encoding format. Meaning we accept JSON in requests and we can respond with JSON formatted data.

There are a few good extensions or middleware that is easy to plug into express and allows us to tweak and change some of the parts of the webserver. Some of these middleware extensions are body-parser, compression, cors, errorhandler (find the list here; http://expressjs.com/en/resources/middleware.html)

## More resources
The best way to learn Express is to use it to build small simple applications and read the documentation. 

# Learning goals

- [ ] Express
  - [ ] What is express
  - [ ] Routing
  - [ ] Logging and debugging
- [ ] Middleware
- [ ] Postman

Reproduce a log hitting errors and understanding flow.

## Relevant links

- [Preparation](preparation.md)
- [Homework](homework/readme.md)
- [Lesson plan](lesson-plan.md)

## Express.js

In Node.js it's possible to make a HTTP server, using the native `http` module. However, this is rarely used in practice. Instead, we'll use [Express.js](https://expressjs.com/en/4x/api.html), a backend framework that can do what the `http` module does and much more (in a simpler, faster and more readable way).

Practically speaking, what can we do with a web server like `http` or `Express`? All the magic that makes the frontend work:

- Get and store data that comes from the frontend
- Make API calls to other services
- Secure data that comes from both the frontend and the database
- Any other type of calculation or business logic

For more research, use the following resources:

- [Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [Going out to eat and understanding the basics of Express.js](https://medium.freecodecamp.org/going-out-to-eat-and-understanding-the-basics-of-express-js-f034a029fb66)
- [Express documentation](https://expressjs.com/en/4x/api.html)
