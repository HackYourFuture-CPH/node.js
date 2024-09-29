import express from "express";
import contactsRouter from "./api/contacts.js";

const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

app.use(express.json());

router.use("/contacts", contactsRouter);

app.use("/api", router);
// /api/contacts
app.listen(port, () => console.log(`Server listening on port ${port}!`));
