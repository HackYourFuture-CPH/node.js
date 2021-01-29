const portfinder = require('portfinder');
const request = require('supertest');
const superagent = require('superagent');
const app = require('../src/backend/index');

// Check if server is running. If server is running, run the tests on the running server
// If no server is running, run tests on 'app' using supertest
let realServerRunning;
portfinder.basePort = 3000;
portfinder.highestPort = 3000;
portfinder.getPort(function (err, port) {
    if (err) {
        // Port 3000 is not available--we assume a server is running
        console.log('Port 3000 is NOT available, assuming a server is already running');
        realServerRunning = true;
        console.log(`realServerRunning: ${realServerRunning}`);
    } else {
        console.log('Port 3000 is available, assuming a server is NOT already running');
        realServerRunning = false;
        console.log(`realServerRunning: ${realServerRunning}`);
    }
});

beforeEach(async () => {
    if (realServerRunning) {
        app.close();
    }
});

afterEach(async () => {
    if (!realServerRunning) {
        app.close();
    }
});
afterAll(async () => {
    if (!realServerRunning) {
        app.close();
    }
});

describe("GET /", () => {
    test("returns 'head' in response", async (done) => {
        let response;
        if (realServerRunning) {
            response = await superagent.get('http://localhost:3000');
        } else {
            response = await request(app).get("/");
        }
        expect(response.text.includes("head")).toBeTruthy();
        done();
    });
});

describe("GET /contact", () => {
    test("returns 'head' in response", async (done) => {
        let response;
        if (realServerRunning) {
            response = await superagent.get('http://localhost:3000/contact');
        } else {
            response = await request(app).get("/contact");
        }
        expect(response.statusCode).toBe(200);
        expect(response.text.includes("head")).toBeTruthy();
        done();
    });
});

describe("GET /contact", () => {
    test("includes correct 'title'", async (done) => {
        let response;
        if (realServerRunning) {
            response = await superagent.get('http://localhost:3000/contact');
        } else {
            response = await request(app).get("/contact");
        }
        expect(response.statusCode).toBe(200);
        expect(response.text.includes("<title>Contact")).toBeTruthy();
        done();
    });
});

// describe("GET /education", () => {
//     test("route exists", async (done) => {
//         const response = await request(app).get("/education");
//         expect(response.statusCode).toBe(200);
//         done();
//     });
// });

// describe("GET /education", () => {
//     test("returns 'head' in response", async (done) => {
//         const response = await request(app).get("/education");
//         expect(response.statusCode).toBe(200);
//         expect(response.text.includes("head")).toBeTruthy();
//         done();
//     });
// });

// describe("GET /education", () => {
//     test("includes correct 'title'", async (done) => {
//         const response = await request(app).get("/education");
//         expect(response.statusCode).toBe(200);
//         expect(response.text.includes("<title>Education")).toBeTruthy();
//         done();
//     });
// });

// describe("GET /skills", () => {
//     test("route exists", async (done) => {
//         const response = await request(app).get("/skills");
//         expect(response.statusCode).toBe(200);
//         done();
//     });
// });

// describe("GET /skills", () => {
//     test("returns 'head' in response", async (done) => {
//         const response = await request(app).get("/skills");
//         expect(response.statusCode).toBe(200);
//         expect(response.text.includes("head")).toBeTruthy();
//         done();
//     });
// });

// describe("GET /skills", () => {
//     test("includes correct 'title'", async (done) => {
//         const response = await request(app).get("/skills");
//         expect(response.statusCode).toBe(200);
//         expect(response.text.includes("<title>Skills")).toBeTruthy();
//         done();
//     });
// });

// describe("GET /projects", () => {
//     test("route exists", async (done) => {
//         const response = await request(app).get("/projects");
//         expect(response.statusCode).toBe(200);
//         done();
//     });
// });

// describe("GET /projects", () => {
//     test("includes correct 'title'", async (done) => {
//         const response = await request(app).get("/projects");
//         expect(response.statusCode).toBe(200);
//         expect(response.text.includes("<title>Projects")).toBeTruthy();
//         done();
//     });
// });

// describe("GET /projects", () => {
//     test("includes required html fields", async (done) => {
//         const response = await request(app).get("/projects");
//         expect(response.statusCode).toBe(200);
//         expect(response.text.includes("title")).toBeTruthy();
//         expect(response.text.includes("codeUrl")).toBeTruthy();
//         expect(response.text.includes("previewUrl")).toBeTruthy();
//         expect(response.text.includes("img")).toBeTruthy();
//         done();
//     });
// });
