// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const createTitle = require("./title_creator.js");

app.get("/", (request, response) => {
  response.send(`
    ${createTitle("Home")}
    <body>
        <h1>My Portfolio</h1>
        <h2>I am a web developer</h2>
        <p>I like to:</p>
        <ul>
          <li>Play sports</li>
          <li>Listen to music</li>
        </ul>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
    ${createTitle("Contact")}
    <body>
        <h1>Contact</h1>
        <p>You can follow me on:</p>
        <ul>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
        </ul>
    </body>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
    ${createTitle("Education")}
    <body>
        <h1>Education</h1>
        <p>University of Life</p>
    </body>
  `);
});

app.get("/skills", (request, response) => {
  response.send(`
    ${createTitle("Skills")}
    <body>
        <h1>Skills</h1>
        <p>Here are my skills:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
    </body>
  `);
});

app.get("/projects", (request, response) => {
  response.send(`
    ${createTitle("Projects")}
    <body>
        <h1>Projects</h1>
        <h2 class="title codeUrl"><a href="https://toogoodtogo.com/en-us">Too Good To Go</a></h2>
        <p class="projectUrl"><a href="https://github.com/too-good-to-go">Link to code</a></p>
        <img class="previewUrl" src="https://tgtg-mkt-cms-prod.s3.amazonaws.com/32/kunUscuLIu5zLyiMMAJYzpIShFHbyyhgj9Ts2uI7.jpg" alt="tgtg-logo">
        <h2 class="title codeUrl"><a href="https://hackyourfuture.dk">HackYourFuture</a></h2>
        <p class="projectUrl"><a href="https://github.com/HackYourFuture-CPH/hackyourfuture.dk">Link to code</a></p>
        <img src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="hyf-logo "
    </body>
  `);
});

app.get('/test-report', function(requset, response) {
    response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
