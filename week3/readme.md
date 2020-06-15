# Learning goals

- [ ] Database interaction - No ORM!
  - [ ] Connecting to mysql using Knex
    - [ ] Environment variables
  - [ ] Executing queries using knex
- [ ] API
  - [ ] REST
  - [ ] CRUD
    - [ ] Router verb `GET`, `POST`, `DELETE`, `PUT`
    - [ ] POST mention express.json middleware
  - [ ] Postman

# Relevant links

- [Preparation](preparation.md)
- [Homework](homework.md)
- [Lesson plan](lesson-plan.md)

## 1. What is Representational State Transfer (REST)?

Building software is like building houses: architecture is everything. The design of each part is just as important as the utility of it. REST is a specific architectural style for web applications. It serves to organise code in **predictable** ways.

The most important features of REST are:

- An application has a `frontend` (client) and a `backend` (server). This is called [separation of concerns](https://medium.com/machine-words/separation-of-concerns-1d735b703a60): each section has its specific job to do. The frontend deals with presenting data in a user friendly way, the backend deals with all the logic and data manipulation
- The server is `stateless`, which means that it doesn't story any data about a client session. Whenever a client sends a request to the server, each request from the client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. This makes it possible to handle requests from millions of users.
- Server responses can be temporarily stored on the client (a browser) using a process called `caching`: storing files like images or webpages in the browser to load the next time you enter a website (instead of getting them from the server, which generally takes longer to do)
- Client-server communication is done through `Hypertext Transfer Protocol` (more on that later), which serves as the style (the how) of communication.

It's important to know about REST because it teaches us how web applications are designed and holds us to a standard that makes development and usage predictable. However, don't worry if you don't know what any of this means just yet. It's good to be exposed to it, and understanding will come with experience.

For more research, check the following resource:

- [What is REST: a simple explanation for beginners](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

- [@NoerGitKat](https://www.github.com/NoerGitKat)
