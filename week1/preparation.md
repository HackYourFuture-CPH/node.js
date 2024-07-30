# Preparation

## Installing node

1. Setup `node` on your computer (skip to step 2 to check):
   1. Download from: https://nodejs.org/en/download/
   2. Check if node is installed in your system by running the sollowing commands in Command Promt/PowerShell/Git Bash:
      - `node -v`
      - `npm -v`
      - In either case you should see the version of `node` or `npm` installed.

## Understanding the basics of NodeJS

- Client server model: https://www.youtube.com/watch?v=L5BlpPU_muY (6 min)
- HTTP and HTML: https://www.youtube.com/watch?v=1K64fWX5z4U (7 min)
- Video about node: https://www.youtube.com/watch?v=pU9Q6oiQNd0 (13 min)
- https://www.freecodecamp.org/news/how-the-web-works-part-ii-client-server-model-the-structure-of-a-web-application-735b4b6d76e3/ Until `That’s all folks! (Well, sorta…)` (10 min)

Try to formulate an answer to the question:

- What is the server and what is the client?
- What is http?
- What is Node.js?

## Flipped classroom videos

### Teacher Live Coding Videos - https://github.com/HackYourFuture-CPH/teacher-live-coding

- [What happens when you open a webpage - Class 1](https://youtu.be/wdj2LrpKSdg)
- [What is node js and how to use it - Class 1](https://youtu.be/gTa5R1PHIiY)
- [Node js project structure - Class1](https://youtu.be/CUY20f-KBxE)
- [Creating a simple Express webserver in Node js and creating your own modules - Class 1](https://youtu.be/R-dl4-VnZYA)

## Extras

### **Good resources for learning node**

[8 hours intro to NodeJS](https://www.youtube.com/watch?v=Oe421EPjeBE)

### **The REPL**

There are many ways to interact with Node. We can start the environment up in a REPL, we can start it up with a file, we can start it inside a docker container.
After installing NodeJS on your machine, you will have access to the environment by typing `node` in the terminal. This will drop you into the node REPL (Read Evaluate Print Loop).

```
Welcome to Node.js v15.14.0
Type “.help” for more information.
>
```

In here you will have access to the javascript language. There are limitations, which depends on the version number of Node. The further it progresses in time, the more features will be included.

### **Feeding the REPL files**

You can also feed node files to evaluate and this is where node becomes such a powerful tool for any developer, especially frontend developers.

### **Creating an NPM project with a script that starts the application**

http://ajmalsiddiqui.me/blog/introduction-to-npm-scripts/

### **As a Webserver**

- Can serve HTTP responses to HTTP requests.
- Is most often used together with the REST principle.
- The REST principle is an architecture for organising resources.

### **Security and authentication**

In many cases we don’t want the web server to just serve information to anyone, some of it might be privileged i.e. should only be available to a specific user. It is the responsibility of the web server to check that the requests it receives have the right authentication required e.g. so user A can only get information about their own account, not other users.

### **Database interaction**

The web server rarely has any information or data built into it. It relies on external systems built specifically for that purpose and acts as a proxy between the database and the requester. (However, node is a general purpose programming language, so it can indeed also be used to write a database system e.g. https://dzone.com/articles/building-a-database-written-in-nodejs-from-the-gro).

### **Tests**

Testing is an often used technique in software development to better ensure your code does what you expect it to. Booting up a server locally and doing manual testing works to some extent, but this is not manageable or scalable as an application grows in complexity.

To help you get accustomed to what testing looks like, each week's homework includes a set of tests to move you along in the exercises. This provides structure for you to better understand what you need to complete and to help you be sure that you are correctly completing the tasks.

If in doubt, from the week's `homework` directory from which you are completing the exercises, run (after running `npm install`):

`npm test`

This will give you an idea of the tasks you need to complete.
