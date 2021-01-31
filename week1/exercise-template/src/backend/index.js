// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const createTitle = require("./title_creator.js");
const renderProjectsList = require("./project_creator.js");
const addCSS = require("./css_creator.js");
const path = require("path");

const projects = [
  {
    title: "cph.kiwi",
    codeUrl:
      "https://github.com/cph-kiwi/beth-jackson/blob/master/pages/index.js",
    previewUrl: "https://cph.kiwi/",
    image:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/1923371_8030240812_3176_n.jpg?_nc_cat=106&ccb=2&_nc_sid=de6eea&_nc_ohc=I60mlQxwau8AX-2I5Lj&_nc_ht=scontent-amt2-1.xx&oh=1e0fb8dd00ebbef80c98b301397bb9e1&oe=60396A30",
  },
  {
    title: "Pig Latin Translator",
    codeUrl:
      "https://github.com/cph-kiwi/pig-latin-translator/blob/master/public/index.html",
    previewUrl: "https://pig-latin.cph.kiwi/",
    image:
      "https://github.com/cph-kiwi/pig-latin-translator/blob/master/public/littlepiggy.png?raw=true",
  },
];

app.get("/", (request, response) => {
  response.send(
    ` ${createTitle("Home")}
    <body style="${addCSS}">
        <h1 style="color: #614e55; font-weight: 800">My portfolio</h1>
        <p>My name is Beth Jackson. I'm from New Zealand and live in Copenhagen. My career background is in university administration, and now I study software development.</p>
        <h2 style="color: #614e55; font-weight: 800">See more...</h2>
        <ul style="list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center">
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="http://localhost:3000/contact">Contacts</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="http://localhost:3000/education">Education</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="http://localhost:3000/skills">Skills</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="http://localhost:3000/projects">Projects</a></li>
        </ul>
    </body>
  `
  );
});

app.get("/contact", (request, response) => {
  response.send(`
  ${createTitle("Contact")}
      <body style="${addCSS}">
        <h1 style="color: #614e55; font-weight: 800">Contact</h1>
        <p>This is a contact page</p>
        <ul style="list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center">
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="https://cph.kiwi" target="_blank">Beth's website</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="beth.jack@gmail.com" target="_blank">beth.jack@gmail.com</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="https://www.linkedin.com/in/beth-jackson-4a29ab193/" target="_blank">LinkedIn</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="https://github.com/cph-kiwi" target="_blank">Github</a></li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center"><a href="https://twitter.com/cph_kiwi" target="_blank">Twitter</a></li>
        </ul>
    </body>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
  ${createTitle("Education")}
      <body style="${addCSS}">
        <h1 style="color: #614e55; font-weight: 800">My education</h1>
        <p>This is an education page</p>
        <ul style="list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center">
        <li style="display: flex;
        flex-direction: column;
        align-items: center">BCom in Management minoring in Philosophy from the University of Otago</li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center">BSc in Psychology from the University of Otago</li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center">PRINCE2 from Westminster University</li>
        </ul>
    </body>
  `);
});

app.get("/skills", (request, response) => {
  response.send(`
  ${createTitle("Skills")}
      <body style="${addCSS}">
        <h1 style="color: #614e55; font-weight: 800">My skills</h1>
        <p>This is a skills page</p>
        <ul style="list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center">
        <li style="display: flex;
        flex-direction: column;
        align-items: center">Organised</li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center">Efficient</li>
        <li style="display: flex;
        flex-direction: column;
        align-items: center">Good communicator</li>
        </ul>
    </body>
  `);
});

app.get("/projects", (request, response) => {
  response.send(`
  ${createTitle("Projects")}
      <body style="${addCSS}">
        <h1 style="color: #614e55; font-weight: 800">My projects</h1>
        <p>This is a projects page</p>
        <ul style="list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center">
        ${renderProjectsList(projects)}
        </ul>
    </body>
  `);
});

app.get("/test-report", function (requset, response) {
  response.sendFile(path.join(__dirname + "/test-report.html"));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
