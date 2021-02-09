const fs = require('fs')
const request = require("supertest");
const app = require("../src/backend/app");

describe(".env file", () => {
    test("exists", () => {
        let envFile = './.env';
        expect(fs.existsSync(envFile)).toBeTruthy();
    });
});