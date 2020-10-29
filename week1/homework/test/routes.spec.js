const request = require("supertest");
const app = require("../src/backend/app");
const meals = require("../src/backend/data/meals");
const reviews = require("../src/backend/data/reviews");
const reservations = require("../src/backend/data/reservations");

describe("GET /", () => {
  test("responds with corrected response", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Meal Sharing Web App");
  });
});

describe("GET /meals", () => {
  test("responds with all meals (with their reviews, if any) from data file", async () => {
    // Deep copy meals
    const copiedMeals = JSON.parse(JSON.stringify(meals));
    const mealsWithReviews = copiedMeals.map((meal) => {
      meal.reviews = reviews.filter((review) => review.mealId === meal.id);
      return meal;
    });
    const response = await request(app).get("/meals");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(mealsWithReviews);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /cheap-meals", () => {
  test("route exists", async () => {
    const response = await request(app).get("/cheap-meals");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /large-meals", () => {
  test("route exists", async () => {
    const response = await request(app).get("/large-meals");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /meal", () => {
  test("responds with a single random meal from the data file", async () => {
    try {
      expect(meals.length).toBeGreaterThan(1);
    } catch (error) {
      throw new Error(
        "Ensure your meals data file (meals.json) actually has more than one meal!"
      );
    }
    const response = await request(app).get("/meal");
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe("object");
    expect(Array.isArray(response.body)).toBeFalsy();
  });
});

describe("GET /reservations", () => {
  test("responds with all the reservations from data file", async () => {
    const response = await request(app).get("/reservations");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(reservations);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("GET /reservation", () => {
  test("responds with a single random reservation from the reservation file", async () => {
    try {
      expect(reservations.length).toBeGreaterThan(1);
    } catch (error) {
      throw new Error(
        "Ensure your reservations data file (reservations.json) actually has more than one reservation!"
      );
    }
    const response = await request(app).get("/reservation");
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe("object");
    expect(Array.isArray(response.body)).toBeFalsy();
  });
});
