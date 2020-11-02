const request = require("supertest");
const app = require("../src/backend/app");
const meals = require("../src/backend/data/meals");
const reviews = require("../src/backend/data/reviews");
const reservations = require("../src/backend/data/reservations");

describe("GET /meals", () => {
    test("responds with all meals from data file", async () => {
        const response = await request(app).get("/meals");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(meals);
    });
});

describe("GET /meals", () => {
    test("returns all meals from data file as array", async () => {
        const response = await request(app).get("/meals");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /meals/:id", () => {
    test("responds with a single meal from with the correct id", async () => {
        const randomId = Math.floor(Math.random() * (meals.length - 1 + 1)) + 1;
        const response = await request(app).get(`/meals/${randomId}`);
        const foundMeal = meals.find(meal => meal.id === randomId);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(foundMeal);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /meals/:id", () => {
    test("responds without a meal with nonexistent id", async () => {
        const nonexistentId = "8383838383838388338338383833838";
        const response = await request(app).get(`/meals/${nonexistentId}`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /meals/:id", () => {
    test("responds with 400 when id not integer", async () => {
        const stringId = "i-am-string";
        const response = await request(app).get(`/meals/${stringId}`);
        expect(response.statusCode).toBe(400);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /reservations", () => {
    test("responds with all reservations from data file", async () => {
        const response = await request(app).get("/reservations");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(reservations);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reservations", () => {
    test("responds with reservations from data file as array", async () => {
        const response = await request(app).get("/reservations");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reservations/:id", () => {
    test("responds with a single meal from with the correct id", async () => {
        const randomId = Math.floor(Math.random() * (reservations.length - 1 + 1)) + 1;
        const response = await request(app).get(`/reservations/${randomId}`);
        const foundReservation = reservations.find(reservation => reservation.id === randomId);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(foundReservation);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /reviews", () => {
    test("responds with all reviews from data file", async () => {
        const response = await request(app).get("/reviews");
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(reviews);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reviews", () => {
    test("responds with reviews from data file as array", async () => {
        const response = await request(app).get("/reviews");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe("GET /reviews/:id", () => {
    test("responds with a single meal from with the correct id", async () => {
        const randomId = Math.floor(Math.random() * (reviews.length - 1 + 1)) + 1;
        const response = await request(app).get(`/reviews/${randomId}`);
        const foundReview = reviews.find(review => review.id === randomId);
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(foundReview);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /meals?maxPrice", () => {
    test("returns meals under a price passed in query params", async () => {
        const maxPrice = 80;
        const mealsUnderMaxPrice = meals.filter(meal => meal.price < maxPrice);
        const response = await request(app).get(`/meals?maxPrice=${maxPrice}`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body).toMatchObject(mealsUnderMaxPrice);
    });
});

describe("GET /meals?maxPrice", () => {
    test("returns 400 when maxPrice not parseable", async () => {
        const notNumber = "i-am-not-a-number";
        const response = await request(app).get(`/meals?maxPrice=${notNumber}`);
        expect(response.statusCode).toBe(400);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /meals?title", () => {
    test("returns meals with partial title", async () => {
        const title = "Indian food";
        const queryTitle = "Indian%20food";
        const mealsWithMatchedTitle = meals.filter(meal => meal.title.includes(title));
        const response = await request(app).get(`/meals?title=${queryTitle}`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body).toMatchObject(mealsWithMatchedTitle);
    });
});

describe("GET /meals?createdAfter", () => {
    test("returns meals after given date", async () => {
        const date = "2019-12-24";
        const mealsAfterDate = meals.filter(meal => Date.parse(meal.createdAt) > Date.parse(date));
        const response = await request(app).get(`/meals?createdAfter=${date}`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body).toMatchObject(mealsAfterDate);
    });
});

describe("GET /meals?createdAfter", () => {
    test("returns 400 if date not parseable", async () => {
        const date = "an-unparseable-date";
        const response = await request(app).get(`/meals?createdAfter=${date}`);
        expect(response.statusCode).toBe(400);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});

describe("GET /meals?limit", () => {
    test("returns number of meals provided in limit", async () => {
        const limit = "5";
        const response = await request(app).get(`/meals?limit=${limit}`);
        const expectedNumberOfMeals = parseInt(limit) > meals.length ? meals.length : parseInt(limit)
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBe(expectedNumberOfMeals);
    });
});

describe("GET /meals?limit", () => {
    test("returns 400 when limit not parseable", async () => {
        const notNumber = "i-am-not-a-number";
        const response = await request(app).get(`/meals?limit=${notNumber}`);
        expect(response.statusCode).toBe(400);
        expect(Array.isArray(response.body)).toBeFalsy();
    });
});
