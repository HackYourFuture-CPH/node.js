const request = require("supertest");
const app = require("../src/backend/app");

const movies = [
    {"id": 1, "title": "Old One", "year": 1925, "rating": 7.2, "votes": 41702, "running_times": 5940},
    {"id": 2, "title": "Really Good One", "year": 1992, "rating": 9.2, "votes": 9884, "running_times": 5320},
    {"id": 3, "title": "Really Bad One", "year": 2020, "rating": 0.2, "votes": 989384, "running_times": 4940},
    {"id": 4, "title": "New One", "year": 2021, "rating": 5.2, "votes": 1702, "running_times": 2940}
];

// Mock the movies so that the endpoints can be tested without implementing logic ;)
jest.mock('../src/backend/data/movies', () => {
    return movies;
});

describe("GET /api/movies", () => {
    test("returns all movies", async () => {
        const response = await request(app)
            .get("/api/movies")
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject(movies);
        expect(Array.isArray(response.body.data)).toBeTruthy();
    });
});

describe("GET /api/movies/<id>", () => {
    test("returns movies of only that id", async () => {
        const id = 3;
        const response = await request(app)
            .get(`/api/movies/${id}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject(movies[2]);
    });
});

describe("GET /api/movies/<id>", () => {
    test("returns empty object when no matching IDs", async () => {
        const nonMatchingId = 512351;
        const response = await request(app)
            .get(`/api/movies/${nonMatchingId}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject({});
    });
});

describe("GET /api/movies/<year>", () => {
    test("returns empty list when wrong type as ID provided", async () => {
        const response = await request(app)
            .get("/api/movies/not-a-number")
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject({});
    });
});

describe("GET /api/movies?beginYear=1900&endYear=1993", () => {
    test("returns all movies between 1990 and 1993", async () => {
        const beginYear = 1900;
        const endYear = 1993;
        const response = await request(app)
            .get(`/api/movies?beginYear=${beginYear}&endYear=${endYear}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data).toMatchObject(movies.slice(0, 2));
    });
});

describe("GET /api/movies?beginYear=2020&endYear=2021", () => {
    test("includes movies equal to beginYear", async () => {
        const beginYear = 2021;
        const endYear = 2021;
        const response = await request(app)
            .get(`/api/movies?beginYear=${beginYear}&endYear=${endYear}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data).toMatchObject([movies[3]]);
    });
});

describe("GET /api/movies?beginYear=2020&endYear=2020", () => {
    test("includes movies equal to endYear", async () => {
        const beginYear = 2020;
        const endYear = 2020;
        const response = await request(app)
            .get(`/api/movies?beginYear=${beginYear}&endYear=${endYear}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data).toMatchObject([movies[2]]);
    });
});

describe("GET /api/movies?beginYear=2020&endYear=2015", () => {
    test("returns no movies when endYear earlier than beginYear", async () => {
        const beginYear = 2020;
        const endYear = 2015;
        const response = await request(app)
            .get(`/api/movies?beginYear=${beginYear}&endYear=${endYear}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data).toMatchObject([]);
    });
});

describe("GET /api/movies?minRating=7", () => {
    test("returns only movies over minRating", async () => {
        let minRating = 7;
        const response = await request(app)
            .get(`/api/movies?minRating=${minRating}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data).toMatchObject(movies.slice(0, 2));
    });
});

describe("GET /api/movies?minRating=5.3", () => {
    test("minRating handles floats correctly", async () => {
        let minRating = 5.3;
        const response = await request(app)
            .get(`/api/movies?minRating=${minRating}`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(response.body.data).toMatchObject(movies.slice(0, 2));
    });
});

describe("GET /middleware-test", () => {
    test("correctly adds isChromeBrowser to request", async () => {
        const response = await request(app)
            .get(`/middleware-test`)
            .set('user-agent', 'for-testing');

        expect(response.statusCode).toBe(200);
        expect(response.body.data.isChromeBrowser).not.toBeNull();
    });
});

describe("GET /middleware-test", () => {
    test("correctly specifies isChromeBrowser when user-agent includes Chrome", async () => {
        const response = await request(app)
            .get(`/middleware-test`)
            .set('user-agent', 'something something Chrome');

        expect(response.statusCode).toBe(200);
        expect(response.body.data.isChromeBrowser).toBeTruthy();
    });
});

describe("GET /middleware-test", () => {
    test("correctly specifies isChromeBrowser when user-agent does NOT include Chrome", async () => {
        const response = await request(app)
            .get(`/middleware-test`)
            .set('user-agent', 'something something Firefox');

        expect(response.statusCode).toBe(200);
        expect(response.body.data.isChromeBrowser).toBeFalsy();
    });
});