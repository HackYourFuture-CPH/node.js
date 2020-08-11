const express = require("express");
const app = express();
const router = express.Router();

const contactsRouter = require("./api/contacts");

const port = process.env.PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/contacts", contactsRouter);

app.use("/api", router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
