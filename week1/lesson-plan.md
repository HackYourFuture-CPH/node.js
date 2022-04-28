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
    - [Live coding](https://github.com/HackYourFuture-CPH/node.js/tree/main/week1/teacher-live-coding)
    - [Exercise](https://github.com/HackYourFuture-CPH/node.js/tree/main/week1/exercise-template)

## Warmup exercises 

### Create your hello world server 
* Create a file called server.js
* Create a server in this file.
* Listen on port 3000.
* When the user calls "/" return the text "hello world"

### Create a random meal picker 
* Create a file called server.js
* Create a server in this file.
* Listen on port 3000.
* Create a new file “meals.js” and export an array of meals.
* When the user calls “/meal” return a random meal from the array of the predefined meals.

Expected call: `GET localhost:3000/meal`
Commands to use:
```js
npm init
npm install express - -save
module.exports = [] or module.exports.meals = []
```


## Flipped classroom videos

[Flipped classroom videos](https://github.com/HackYourFuture-CPH/node.js/blob/main/week1/preparation.md#flipped-classroom-videos)

## Code inspiration

### Created module

Go to the `teacher-live-coding` folder, `npm install` and run using `nodemon ./src/backend/created-module.js`. Try and implement this functionality from the bottom while explaining.

### Building a simple http webserver

Go to the `teacher-live-coding` folder, run using `nodemon ./src/backend/simple-webserver.js`. Try and implement this functionality from the bottom while explaining.
