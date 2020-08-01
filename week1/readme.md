# Learning goals

- [ ] What happens when you open a webpage?
- [ ] [HTTP - What is the internet](#What-is-Hypertext-Transfer-Protocol-HTTP)
  - [ ] Client
  - [ ] HTTP server
- [ ] [Introduction to node js](#What-is-Nodejs)
  - [ ] [What is node and why node?](https://www.youtube.com/watch?v=pU9Q6oiQNd0)
  - [ ] V8 vs the browser that runs js?
  - [ ] What can you build with nodejs?
- [ ] Simple webserver with node js
  - [ ] npm init
  - [ ] Tests
  - [ ] Modules
    - [ ] Creating and importing using `module.exports` and `require`
    - [ ] Npm modules
    - [ ] .gitignore
  - [ ] Nodemon
  - [ ] Express - Simple `GET` requests, focus on usage

# Relevant links

- [Preparation](preparation.md)
- [Homework](homework.md)
- [Lesson plan](lesson-plan.md)

## Installing node

1. Setup `node` on your computer (skip to step 2 to check):
   1. Download from: https://nodejs.org/en/download/
   2. Check if node is installed in your system by running the sollowing commands in Command Promt/PowerShell/Git Bash:
      - `node -v`
      - `npm -v`
      - In either case you should see the version of `node` or `npm` installed.
      
## Tests

Testing is an often used tool in software development to better ensure your code does what you want it to. Booting up a server locally and doing manual testing works to some extent, but this is not manageable or scalable as an application grows.

To help you get accustomed to what testing looks like, each week's homework includes a set of tests to move you along in the exercises. This provides structure for you to better understand what you need to complete and to help you be sure that you are correctly completing the tasks.

If in doubt, from the week's `homework` directory from which you are completing the exercises, run (after running `npm install`):

`npm test`

This will give you an idea of the tasks you need to complete.

## What is backend?

In software development, we separate the user experience and utility (the `frontend`) from the code that actually makes it work (the `backend`). The real world contains many examples of this division: take for example an [ATM](../images/atm.jpg). What you can interact with it (press a button or insert a card), you are dealing with the `user interface`; which is the end result of frontend code. However, everything that's needed to make it work like that is found within the device: this is the hardware and software needed to make it work the way it does.

In web development the term backend can be boiled down to 3 components:

- A `server`: a computer that is connected to other computers, which runs an application (see below) that allows for sharing and managing services (like a calculator or word processor) and resources (like images, text files).
- A `database`: software that manages and saves sensitive data for later use.
- An `application`: software that communicates between the server, database and frontend. It contains code that allows it to interact with and manipulate the server, database and other type of software services.

For more information, read:
[Basics of backend development](https://www.upwork.com/hiring/development/a-beginners-guide-to-back-end-development/)
[Getting started with backend development](https://codeburst.io/getting-started-with-backend-development-bfd8299e22e8)

When people refer to backend programming, they usually refer to **writing the application** part of the backend: the software that interacts with a server and database, and moves data from one computer to the next. The application consists of code that will be read by a database and/or server, so that they know what to do with the incoming input.

Why would we need a backend? There are multiple reasons:

- **Security**. We don't want any random user to directly access our sensitive data, without verifying who they are. For example, if you have an online back account then you need to login to verify it's you. The whole process of login and verification is code written in a place that can't be reached so easily.
- **Performance**. The speed of our user interfaces is greatly dependent upon the server that provides it. The backend contains code that makes sure it optimally makes use of the server's resources (hardware, memory, etc.) to provide the user with the best experience.
- **Software interactions**. A web application usually makes use of other people's software, web services. The code that communicates with these services and implements it into the frontend is also contained within the backend.

For more information, read:
[Why do we need the backend?](https://www.quora.com/Why-do-we-need-a-back-end-in-web-development-Cant-the-front-end-directly-send-requests-to-the-database)

## What is Node.js?

Node.js is software that allows you to use JavaScript to write the `application` part of the backend. The application is written in different _.js_ files, and are then read and executed using the _node_ command in the Command Line. For example, `node script.js`.

Read the following article and code along: [Introduction into Node.js](https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219)

Software builds on other software. Node.js is powerful because it allows us to use software others have written to help build our own unique applications. In Node.js these are called `modules`/`packages`/`dependencies` (can be used interchangeably). An easy way to get access to these is by using the Node Package Manager, also known as `npm`.

Read the following article and code along: [A Beginner’s Guide to npm — the Node Package Manager](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

It is also powerful because we can use the language we already know, JavaScript, to write backend applications. Watch the following video and code along: [Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)

## The client-server model

The client-server model is one of the most important concepts within web development. The easiest way to explain this concept is by using an analogy.

> Let's say you are hungry and feel like going to a restaurant. The moment you enter the restaurant you are a customer, or in IT terms a `client`. You take a seat and decide to order various things, each order representing a separate `request`: you are requesting an orange juice and requesting a nice, healthy salad. Your requests are heard by the waiter, or in IT terms the `server`. Their job is to listen to your requests and do whatever is necessary to provide you with what you want. The actual services, like cooking the food, making the drinks or doing the dishes are all done by others. However, to the client the end result of these services are all provided by the server. You don't want to know who performs what service, you just want to eat. When the server comes back with whatever you ordered, they provide you with a `response`. This happens whether or not they could fulfill your requests.

In web development the same thing happens. The browser is the client, and some computer that has the data you want is the server. Let's say you login to your online bank account. As the client you want to see the amount of money you currently have. The browser sends out a request to the server, who then activates the necessary services (in this example, some kind of database) and returns with a response containing the exact amount of money you currently have in the bank.

Look into the following resources to increase your understanding:

- [The Client Server Model](https://www.youtube.com/watch?v=L5BlpPU_muY)
- [Client-Server Model & Structure of a Web Application](https://medium.freecodecamp.org/how-the-web-works-part-ii-client-server-model-the-structure-of-a-web-application-735b4b6d76e3)

## What is Hypertext Transfer Protocol (HTTP)?

How HTTP and HTTPS works:
https://twitter.com/b0rk/status/1159478808946335745/photo/1
https://twitter.com/b0rk/status/1159812119099060224/photo/1

A big part of making applications that follow the REST architecture is by use of HTTP methods.

If you've every typed in a URL you might've seen the letters HTTP at the beginning of it, i.e. `http://www.hackyourfuture.net`. It stands for **Hypertext Transfer Protocol** and it is the basic way of sending requests and receiving responses.

Like verbal communication, there's the _content_ (WHAT you are saying) and the _style_ (HOW you are saying it). HTTP refers to the \***\*style\*\*** of online communication. How you communicate over the web is done through specific HTTP methods (also called HTTP verbs), that describe what type of request is being made. The most important ones are:

- **GET**. This type of request is only about getting data from the server. Whenever a user enters a new webpage, this usually means a GET request gets send to the server to get the required files to display that webpage. All other data in the website stays unaffected.
- **POST**. This type of request allows the client to submit new data to the server. Generally speaking, its purpose is to store this new data into a database, or manipulate it and later return it back to the client.
- **PUT**. This type of request allows the client to update existing data, which is already present in the client. The data is edited and then send back to the server, similar to the POST request but more semantic.
- **DELETE**. This type of request tells the server to delete a particular set of data or resources.

Why do you need to know all of this? HTTP is the foundation of how client-server interactions work on the web. It's important to have a universal policy that everyone holds on to, in order to have fast and effective online communication.

If you really wanna get into what happens in the network layer, check out this: https://jvns.ca/networking-zine.pdf Its really nicely done!

Look into the following resources to increase your understanding:

- [The Http and the Web: Http explained](https://www.youtube.com/watch?v=eesqK59rhGA)
- [Basics concepts of web applications](https://www.youtube.com/watch?v=RsQ1tFLwldY)

- [@NoerGitKat](https://www.github.com/NoerGitKat)
