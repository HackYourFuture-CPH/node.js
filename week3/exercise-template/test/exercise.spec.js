const fs = require('fs')
const request = require("supertest");
const app = require("../src/backend/app");
const db = require("../src/backend/database");
const testConcerts = require('./test_concerts');

beforeAll(async () => {
    process.env.NODE_ENV = "test";
    await db.migrate.latest();
    await db.seed.run();
});
  
describe(".env file", () => {
    test("exists", () => {
        let envFile = './.env';
        expect(fs.existsSync(envFile)).toBeTruthy();
    });
});

describe("GET /api/concerts", () => {
    test("returns all concerts", async () => {
        const response = await request(app).get("/api/concerts");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(testConcerts);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /api/concerts/<id>", () => {
    test("returns the concert at ID specified in params", async () => {
        const concertId = 2;
        const expectedConcert = testConcerts.filter(concert => concert.id === concertId)[0];

        const response = await request(app).get(`/api/concerts/${concertId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(expectedConcert);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});