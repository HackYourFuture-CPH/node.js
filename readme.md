> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

# Node.js - Fullstack development

This 3 week HYF Module is about creating a fullstack application in Node.JS. What does fullstack exactly mean? It means we will be creating and connecting both the backend api and the frontend html, css and javascript.

Most of this course will focus on the backend part. Meaning building a webserver that has an api connected to a database. 

`Database <--> Webserver`

## Planning

| Week | Topic                                                     | Preparation                         | Homework                      | Lesson plan                         |
| ---- | --------------------------------------------------------- | ----------------------------------- | ----------------------------- | ----------------------------------- |
| 1.   | HTTP <br> Introduction to node js <br> Simple webserver   | [Preparation](week1/preparation.md) | [Homework](week1/homework/readme.md) | [Lesson plan](week1/lesson-plan.md) |
| 2.   | Express                                                   | [Preparation](week2/preparation.md) | [Homework](week2/homework/readme.md) | [Lesson plan](week2/lesson-plan.md) |
| 3.   | Database connection <br> API                              | [Preparation](week3/preparation.md) | [Homework](week3/homework/readme.md) | [Lesson plan](week3/lesson-plan.md) |

Theses things you should study by yourself!

- Error handling
- Validation

## Pre-requisites

We will build on knowledge from the following HYF (sub)modules. If we feel we have gaps we should review the curriculum ourselves or ask a teacher to help.

- [JavaScript](https://github.com/HackYourFuture/JavaScript)
- [Git](https://github.com/HackYourFuture/Git)
- [Bash/CommandLineInterface](https://github.com/HackYourFuture/CommandLine)

## What will we learn?

- What is Node.js?
- Using Node Package Manager (NPM)
- Using `require` to include modules
- Using `express` to make a RESTful API
- Using `mysql` to connect the API to the backend
- Postman

## Why Node.js?

For almost any web application, it is essential to have a backend. The backend is a place where we, the developers, can store our data, communicate with users and let the users communicate with us, do smart things like calculations, data processing etc.

There are many languages for this. We might've heard of Java, C, C++, Go, Python, Ruby, PHP and the [list goes on](https://blog.newrelic.com/2016/08/18/popular-programming-languages-2016-go/).

There are two reasons why we at HYF choose Node.JS over others:

1. You already know JavaScript, so it's easier to get started than other languages
2. Node.js is great for making web APIs because it is asynchronous by nature and thus allows for high input/output. By this we mean that it allows many users to make very light requests at the same time.
