// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const moviesRouter = require("./api/movies-router");

// This is where you want to create your is chrome browser middleware (second exercise)
const middleware = (request, response, next) => {
    console.log("middlewear root");
    console.log(request.headers['user-agent']);
    const isOnChrome = request.headers['user-agent'].includes("Chrome");
    request.headers.isOnChrome = isOnChrome;
    console.log(request.headers);
    next();
};

app.use('/', middleware);
app.get('/', (request, response) => {
    console.log(`is user on chrome?: ${request.headers.isOnChrome}`);
    response.send("hello world");
})

app.use('/api/movies', [middleware, moviesRouter]);

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/movies", moviesRouter);

module.exports = app;
