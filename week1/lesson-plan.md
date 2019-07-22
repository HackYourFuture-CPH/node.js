# Lesson plan
```
> Focus on having lots of in class exercises.

> DONT teach everything, let the students investigate topics on their own aswell!

> Focus on how to read documentation, google answers and google errors!!

> Teach towards the students being able to solve the homework
```

Remember to add the code you wrote in the class to the relevant class branch's class work folder. If the branch has not been created just create and push it :) If you dont have access, write to one from the core team. You can see an example below!

To find examples of what teachers have taught before go to the class branches in the classwork folder, Fx [class 07](https://github.com/HackYourFuture-CPH/JavaScript/tree/class07/JavaScript1/Week1/classwork)

If you find anything that could be improved then please create a pull request! We welcome changes, so please get involved if you have any ideas!!!

---
- What happens when you open a webpage - draw on a whiteboard
  - Client sends http request to a url
  - The request is directed to the correct ip using DNS
  - The server reads the request and sends a respond
  - Show a simple request and response in Chrome dev tools
- HTTP - What is the internet
    - Client
      - Sends request
      - Receives response
    - HTTP server
      - Listen for requests
      - Responds with data
    - https://websniffer.cc/
- Introduction to node js
    - What is node and why node (https://www.youtube.com/watch?v=pU9Q6oiQNd0)
    - V8 vs the browser that runs js
    - What can you build with nodejs?
      - Utilities
      - Web server
      - Much more
- Simple webserver with node js
  - Npm init
  - Modules
    - Homemade using `module.exports` and `require`
    - [Code inspiration](#footer-as-module)
    - Npm modules
      - npmjs.org
      - `npm install http -s`
      - node_modules
      - Package.json
  - .gitignore
  - Nodemon
  - Play around with Express - Focus on usage!
    - [Code inspiration](#building-a-simple-http-webserver)
    - [Exercise](#portfolio)

## Code inspiration

### Footer as module
footer.js
```js
const getFooter = footerContent => `
    <footer>
        <div>
            ${footerContent}
        </div>
    </footer>
`;

module.exports = getFooter;

```

index.js
```js
const getFooter = require("./footer");
```


### Building a simple http webserver

```js
// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`
    <body>
        <h1>Main page</h1>
        <h2>Shows main content</h2>
    </body>
  `);
});

app.get("/about", (request, response) => {
  response.send(`
    <body>
        <h1>About</h1>
        <p>This is an about page</p>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
        <form>
            <label>name</label>
            <input placeholder="Write your name">
            <button>Contact me</button>
        </form>
    </body>
  `);
});

app.listen(3000);
```

## Exercises

### Portfolio
Start building your portfolio with these routes:

| Route | Description |
| ---- | ----- |
| `/` | Add a title and sub title. Write a couple lines about yourself |
| `/contact` | Add social media links and your email |
| `/educations` | Add a list of your educations |
| `/skills` | Add a list of your skills |

#### Changing the title of the page
Continuing on the last exercise. Lets add some functionality that shows the relevant title of a page using modules!

- Create a function that takes title as parameter
- Calling the function returns the html for the `head` tag and the `title` tag with the title tag set as the parameter
- Export the function using `module.exports`
- Import the function using `require`

Here are the routes and their corresponding title

| Route | Page title |
| ---- | ----- |
| `/` | Home |
| `/contact` | Contact |
| `/educations` | Education |
| `/skills` | Skills |


#### Adding styling
Lets add some styling to our page. We will do it with inlining styles for now. Which should be avoided normally, but for now it is okay. 

Change the previous header function to add some inline styling in the head tag.

Try and see if you can create a module with only the css as a string.

#### Adding a projects route

| Route | Description |
| ---- | ----- |
| `/projects` | Renders a list of your projects |

| Route | Page title |
| ---- | ----- |
| `/projects` | projects |

A project should have: `title`, `codeUrl`, `previewUrl` and `img`. 

Now when the the `projects` route is hit, respond with some rendered html of your projects!
