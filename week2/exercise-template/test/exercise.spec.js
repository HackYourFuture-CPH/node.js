const request = require("supertest");
const app = require("../src/backend/app");
const movies = require("../src/backend/data/movies");

describe("GET /api/movies", () => {
    test("with all movies", async () => {
        const response = await request(app).get("/api/movies");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(movies);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});
