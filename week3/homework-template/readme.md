<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Meal sharing api</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Website api for sharing meals together. Invite your best friends or your family for dinner!
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
This project is an exercise for HackYourFuture students to learn the concepts of full stack development with a focus on the connection between:

Database <--> Webserver

## 🏁 Getting Started <a name = "getting_started"></a>
Check your `node/week3` folder in the `hyf-homework` repo on your computer. If there already is a `src` folder, `package.json` etc, then you can just start working in that folder!

If not: copy the code for the template from this folder into the `node/week3` folder in your `hyf-homework` repo on your computer. 

### Environment variables
All sensitive data like fx passwords and usernames, we dont want to add to git! This problem we solve by having environment variables. Environment variables are not committed to git and have a key value structure. 

In the project there is a file called `.env.example` that has the correct structure. Copy this file and rename the copied file to `.env`. Now edit the credentials for your database.

The environment variables are then used in node using `process.env.DB_HOST`, you can see that in the `src/serverdatabase.js` file. 

### Prerequisites
- Postman
- MySQL Workbench

### Installing
To install run `npm install`

## 🎈 Usage <a name="usage"></a>
To run `npm run dev`

The api can now be found on `http://localhost:3000/api/` an example is `http://localhost:3000/api/meals`

If you go to `http://localhost:3000/` is will throw an error, dont mind this error! You will be working only on the api.

## ⛏️ Built Using <a name = "built_using"></a>
- [Mysql](https://www.npmjs.com/package/mysql) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@benna100](https://github.com/benna100) - Idea & Initial work
