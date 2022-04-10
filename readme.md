
> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.
# NodeJS - Fullstack development

This is the three weeks HYF module about NodeJS. We will use NodeJS to create and connect both the backend api and serve the frontend html, css and javascript.
Most of this course will focus on the backend part. Meaning building a webserver that has an api connected to a database.

````Database <--> Webserver````

## What is Node?

- Node is the other half of fullstack’ing, instead of working in the browser, it runs on a server, that the browser can connect to.

- Javascript environment used server side to create and serve applications.

- General purpose programming environment with modules.

- Gives access to an endless amount of packages through NPM and the JS open-source community, that we can install and use directly.


## Planning

| Week | Topic                                                     | Preparation                         | Homework                      | Lesson plan                         |
| ---- | --------------------------------------------------------- | ----------------------------------- | ----------------------------- | ----------------------------------- |
| 1.   | HTTP <br> Introduction to node js <br> Simple webserver   | [Preparation](week1/preparation.md) | [Homework](week1/homework/readme.md) | [Lesson plan](week1/lesson-plan.md) |
| 2.   | Express                                                   | [Preparation](week2/preparation.md) | [Homework](week2/homework/readme.md) | [Lesson plan](week2/lesson-plan.md) |
| 3.   | Database connection <br> API                              | [Preparation](week3/preparation.md) | [Homework](week3/homework-template/readme.md) | [Lesson plan](week3/lesson-plan.md) |

Theses things you should study by yourself!

- Error handling
- Validation

## Pre-requisites

We will build on knowledge from the following HYF (sub)modules. If we feel we have gaps we should review the curriculum ourselves or ask a teacher to help.

- [JavaScript](https://github.com/HackYourFuture-CPH/JavaScript)
- [Git](https://github.com/HackYourFuture-CPH/git)
- [CommandLine](https://github.com/HackYourFuture-CPH/CommandLine)

## What will we learn?

- What is Node.js?
- Using Node Package Manager (NPM)
- Using `require` to include modules
- Using `express` to make a RESTful API
- Using `mysql` to connect the API to the backend
- Postman

## Working with and using Node
There are many ways to interact with Node. We can start the environment up in a REPL, we can start it up with a file, we can start it inside a docker container.

### The REPL
After installing NodeJS on your machine, you will have access to the environment by typing ````node```` in the terminal. This will drop you into the node REPL (Read Evaluate Print Loop).
````
Welcome to Node.js v15.14.0
Type “.help” for more information.
>
````
In here you will have access to the javascript language. There are limitations, which depends on the version number of Node. The further it progresses in time, the more features will be included.


### Feeding the REPL files
You can also feed node files to evaluate and this is where node becomes such a powerful tool for any developer, especially frontend developers.


### Creating an NPM project with a script that starts the application
http://ajmalsiddiqui.me/blog/introduction-to-npm-scripts/


# What is the typical responsibility of a node application?

### As a Webserver
- Can serve HTTP responses to HTTP requests.
- Is most often used together with the REST principle.
- The REST principle is an architecture for organising resources.

### Security and authentication
In many cases we don’t want the web server to just serve information, some of this might be privilege to a user. It can be the responsibility of the web server to also check that the requests it receives has the right authentication required.

### Database interaction
The web server rarely has any information or data build into it. It relies on external system build specifically for that purpose and acts as a proxy between the database and the requester. (However node is a general purpose programming language, so it can indeed also be used to write a database system (https://dzone.com/articles/building-a-database-written-in-nodejs-from-the-gro).


# Why NodeJS?
For almost any web application, it is essential to have a backend. The backend is a place where we, the developers, can store our data, communicate with users and let the users communicate with us, do smart things like calculations, data processing etc.

There are many languages for this. We might've heard of Java, C, C++, Go, Python, Ruby, PHP and the list goes on.
There are two reasons why we at HYF choose Node.JS over others:
1. You already know JavaScript, so it's easier to get started than other languages
2. Node.js is great for making web APIs because it is asynchronous by nature and thus allows for high input/output. By this we mean that it allows many users to make very light requests at the same time.

# Good resources for learning node
[8 hours intro to NodeJS](https://www.youtube.com/watch?v=Oe421EPjeBE)
