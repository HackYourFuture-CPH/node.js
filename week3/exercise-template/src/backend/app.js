const express = require("express");
const app = express();
const router = express.Router();

const concertsRouter = require("./api/concerts");

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/concerts", concertsRouter);

app.use("/api", router);

module.exports = app;