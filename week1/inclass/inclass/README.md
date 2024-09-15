# Cheatsheet

## Installation

```bash
npm init -y
npm i express --save
npm i nodemon --save-dev
npm i knex mysql2 --save
```

Example package.json:

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.0",
    "knex": "^3.1.0",
    "mysql2": "^3.11.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
```
