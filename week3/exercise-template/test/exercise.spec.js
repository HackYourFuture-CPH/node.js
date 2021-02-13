const fs = require('fs');
const request = require("supertest");
const app = require("../src/backend/app");
const knex = require("../src/backend/database");
const testConcerts = require('./test_concerts');

const performanceDate = new Date().toISOString().replace('T', ' ').split('.')[0].replace('Z', '');

beforeAll(async done => {
    process.env.NODE_ENV = "test";
    await knex.migrate.latest();
    await knex('concerts').truncate()
    done()
});

beforeEach(async done => {
    await knex.seed.run()
    done()
});
  
afterEach(async done => {
    await knex('concerts').truncate()
    done()
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

describe("GET /api/concerts?maxPrice=500", () => {
    test("returns only concerts below 500", async () => {
        const response = await request(app).get("/api/concerts?maxPrice=500");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject([testConcerts[0]]);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /api/concerts?band=metallica", () => {
    test("returns concerts that only match the band name", async () => {
        const response = await request(app).get("/api/concerts?maxPrice=500");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject([testConcerts[0]]);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /api/concerts?title=yonce%20in%20", () => {
    test("returns concerts only that match title", async () => {
        const response = await request(app).get("/api/concerts?title=yonce%20in%20");
        expect(response.statusCode).toBe(200);
        console.log(response.body);
        expect(response.body).toMatchObject([testConcerts[1]]);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /api/concerts?createdAfter=2000", () => {
    test("returns concerts after 2020", async () => {
        const response = await request(app).get("/api/concerts?createdAfter=2000");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(testConcerts.slice(0, 2));
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /api/concerts/<id>", () => {
    test("returns the concert at ID specified in params", async () => {
        const concertId = 2;
        const expectedConcert = testConcerts.filter(
            concert => concert.id === concertId)[0];

        const response = await request(app).get(`/api/concerts/${concertId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(expectedConcert);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /api/concerts/<id>", () => {
    test("returns 400 when concerts nonexistent ID requested", async () => {
        const concertId = "blah";

        const response = await request(app).get(`/api/concerts/${concertId}`);

        expect(response.statusCode).toBe(404);
    });
});

describe("POST /api/concerts", () => {
    test("creates valid concert in database", async () => {
        const band = 'Blackpink';
        const concert = {
            title: `${band} at Roskilde Festival`,
            band: band,
            venue: 'Roskilde Festival',
            performance_date: performanceDate,
            price: 1500,
        };
        const response = await request(app)
            .post(`/api/concerts`)
            .send(concert);

        const createdConcert = await knex('concerts')
            .where({ band: band });

        expect(response.statusCode).toBe(201);
        expect(createdConcert[0]).toMatchObject(concert);
    });
});

describe("POST /api/concerts", () => {
    test("returns 400 when body invalid", async () => {
        const response = await request(app)
            .post(`/api/concerts`)
            .send(
                {
                    title: "Invalid",
                }
            );

        expect(response.statusCode).toBe(400);
    });
});

describe("PUT /api/concerts/<id>", () => {
    test("updates record when request is valid", async () => {
        const band = 'Blackpink';
        const newVenue = 'Store Vega';
        const response = await request(app)
            .post(`/api/concerts`)
            .send(
                {
                    title: `${band} at Roskilde Festival`,
                    band: band,
                    venue: 'Roskilde Festival',
                    performance_date: performanceDate,
                    price: 1500,
                }
            ).then(createdConcert => {
                const createdConcertId = createdConcert.body.id;
                return request(app)
                    .put(`/api/concerts/${createdConcertId}`)
                    .send({ venue: newVenue });
            });

        expect(response.statusCode).toBe(201);     
        expect(response.body.venue).toBe(newVenue);
    });
});

describe("PUT /api/concerts/<id>", () => {
    test("does something", async () => {
        const response = await request(app)
            .post(`/api/concerts`)
            .send(
                {
                    title: 'Blackpink at Roskilde Festival',
                    band: 'Blackpink',
                    venue: 'Roskilde Festival',
                    performance_date: performanceDate,
                    price: 1500,
                }
            ).then(createdConcert => {
                const createdConcertId = createdConcert.body.id;
                return request(app)
                    .put(`/api/concerts/${createdConcertId}`)
                    .send({ nonexistent: 'blah' });
            });

        expect(response.statusCode).toBe(400);
    });
});

describe("DELETE /api/concerts/<id>", () => {
    test("deletes record in database if it exists", async () => {
        const band = 'Blackpink';
        const concert = {
            title: `${band} at Roskilde Festival`,
            band: band,
            venue: 'Roskilde Festival',
            performance_date: performanceDate,
            price: 1500,
        };
        const response = await request(app)
            .post(`/api/concerts`)
            .send(concert);
        const createdId = response.body.id;

        const deleteResponse = await request(app)
            .delete(`/api/concerts/${createdId}`);

        expect (deleteResponse.statusCode).toBe(204);
        expect((await knex("concerts").where({ id: createdId })).length).toBe(0);
    });
});