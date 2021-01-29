const superagent = require('superagent');

describe("GET /", () => {
    test("returns 'head' in response", async (done) => {
        const response = await superagent.get('http://localhost:3000');
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
