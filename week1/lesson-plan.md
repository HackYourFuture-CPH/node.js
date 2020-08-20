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
  - `npm init`
  - Modules
    - Homemade using `module.exports` and `require`
    - [Live coding](#created-module)
    - NPM modules
      - npmjs.org
      - `npm install -s express`
      - node_modules
      - package.json
  - [.gitignore](./teacher-live-coding/.gitignore)
  - Nodemon
  - Play around with Express - Focus on usage!
    - [Live coding](#building-a-simple-http-webserver)
    - [Exercise](#portfolio)

## Code inspiration

### Created module

Go to the `teacher-live-coding` folder, `npm install` and run using `nodemon ./src/backend/created-module.js`. Try and implement this functionality from the bottom while explaining.

### Building a simple http webserver

Go to the `teacher-live-coding` folder, run using `nodemon ./src/backend/simple-webserver.js`. Try and implement this functionality from the bottom while explaining.

## Exercises

### Portfolio

#### Setup

To get started use the node project [here](./exercise-template). That means cloning the [node js repo](https://github.com/HackYourFuture-CPH/node.js), opening up a terminal, cd into the folder. Then you need to run these commands: 

`npm install`

then

`nodemon ./src/backend/index.js`

Now go to localhost:3000/

### Requirements

First, using the same structure as [here](./exercise-template), start building your portfolio with these routes:

| Route         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `/`           | Add a title and sub title. Write a couple lines about yourself |
| `/contact`    | Add social media links and your email                          |
| `/educations` | Add a list of your educations                                  |
| `/skills`     | Add a list of your skills                                      |

To get an understanding of the tasks to complete, run the test command:

`npm test`

#### Changing the title of the page

Continuing on the last exercise. Lets add some functionality that shows the relevant title of a page using modules!

- Create a function that takes title as parameter
- Calling the function returns the html for the `head` tag and the `title` tag with the title tag set as the parameter
- Export the function using `module.exports` see [here](./teacher-live-coding/src/backend/created-module.js) for how to create a module
- Import the function using `require`

Here are the routes and their corresponding title

| Route         | Page title |
| ------------- | ---------- |
| `/`           | Home       |
| `/contact`    | Contact    |
| `/educations` | Education  |
| `/skills`     | Skills     |

Now add this rendered html (with the head and title tag) to the different routes.

#### Adding styling

Lets add some styling to our page. We will do it with inlining styles for now. Which should be avoided normally, but for now it is okay.

Change the previous header function to add some inline styling in the head tag.

Try and see if you can create a module with only the css as a string.

#### Adding a projects route

| Route       | Description                     |
| ----------- | ------------------------------- |
| `/projects` | Renders a list of your projects |

| Route       | Page title |
| ----------- | ---------- |
| `/projects` | projects   |

A project should have: `title`, `codeUrl`, `previewUrl` and `img`.

Now when the the `projects` route is hit, respond with some rendered html of your projects!
