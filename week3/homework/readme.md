# Week 3 homework

Once again, you will deliver 2 pull requests:
* A pull request for the **Warmup** - in your regular hyf-homework repository
* A pull request for the additional **Meal-sharing endpoints** - in the meal-sharing repository

In both repositories, create a `nodejs-week3` branch from `main` to work on the homework (`git checkout -b nodejs-week3` ).

<br/>

## **Warmup**

For the warmup you will be handed a Contacts API with a single endpoint:
- `GET /api/contacts`

This endpoint accepts a query parameter `sort`. Here's how you can use it:
- `GET /api/contacts?sort=first_name%20ASC`
  - Sorts contacts by first name, ascending
- `GET /api/contacts?sort=last_name%20DESC`
  - Sorts contacts by last name, descending

But this `sort` query parameter has been introduced with a SQL injection vulnerability and the goal is to demonstrate the issue and then fix and remove the vulnerability.

### Setup

Go to `nodejs/week3` in your `hyf-homework` repo:

    $ npm init -y
    $ npm i express mysql2 knex
    $ npm i --save-dev nodemon
    $ npm set-script dev "nodemon app.js"

You should also ensure that the `node_modules/` folder is ignored by Git:

    $ echo node_modules/ >> .gitignore

Create a database/schema called `hyf_node_week3_warmup` with a `contacts` table:

```sql
CREATE TABLE `contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample data
insert into contacts (id, first_name, last_name, email, phone) values (1, 'Selig', 'Matussov', 'smatussov0@pinterest.com', '176-630-4577');
insert into contacts (id, first_name, last_name, email, phone) values (2, 'Kenny', 'Yerrington', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (3, 'Emilie', 'Gaitskell', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (4, 'Jordon', 'Tokell', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (5, 'Sallyann', 'Persse', 'spersse4@webnode.com', '219-157-2368');
insert into contacts (id, first_name, last_name, email, phone) values (6, 'Berri', 'Bulter', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (7, 'Lanni', 'Ivanilov', 'livanilov6@fda.gov', null);
insert into contacts (id, first_name, last_name, email, phone) values (8, 'Dagny', 'Milnthorpe', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (9, 'Annadiane', 'Bansal', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (10, 'Tawsha', 'Hackley', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (11, 'Rubetta', 'Ozelton', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (12, 'Charles', 'Boughey', 'cbougheyb@senate.gov', '605-358-5664');
insert into contacts (id, first_name, last_name, email, phone) values (13, 'Shantee', 'Robbe', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (14, 'Gleda', 'Peat', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (15, 'Arlinda', 'Ethersey', 'aetherseye@biglobe.ne.jp', '916-139-1300');
insert into contacts (id, first_name, last_name, email, phone) values (16, 'Armando', 'Meachem', 'ameachemf@oaic.gov.au', '631-442-5339');
insert into contacts (id, first_name, last_name, email, phone) values (17, 'Codi', 'Redhouse', null, '401-953-6897');
insert into contacts (id, first_name, last_name, email, phone) values (18, 'Ann', 'Buncombe', 'abuncombeh@ow.ly', '210-338-0748');
insert into contacts (id, first_name, last_name, email, phone) values (19, 'Louis', 'Matzkaitis', 'lmatzkaitisi@ebay.com', '583-996-6979');
insert into contacts (id, first_name, last_name, email, phone) values (20, 'Jessey', 'Pala', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (21, 'Archy', 'Scipsey', 'ascipseyk@ask.com', '420-983-2426');
insert into contacts (id, first_name, last_name, email, phone) values (22, 'Benoit', 'Mould', 'bmouldl@bing.com', '271-217-9218');
insert into contacts (id, first_name, last_name, email, phone) values (23, 'Sherm', 'Girardey', 'sgirardeym@guardian.co.uk', '916-999-2957');
insert into contacts (id, first_name, last_name, email, phone) values (24, 'Raquel', 'Mudge', 'rmudgen@slate.com', '789-830-7473');
insert into contacts (id, first_name, last_name, email, phone) values (25, 'Tabor', 'Reavey', null, null);
```

Create `app.js`:

```js
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
})

const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const apiRouter = express.Router()
app.use("/api", apiRouter)

const contactsAPIRouter = express.Router()
apiRouter.use("/contacts", contactsAPIRouter)

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts")

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString()
    if (orderBy.length > 0) {
      query = query.orderByRaw(orderBy)
    }
  }

  console.log("SQL", query.toSQL().sql)

  try {
    const data = await query
    res.json({ data })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Internal server error" })
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
```

As mentioned above, the `sort` query parameter has been introduced with a SQL injection vulnerability.

First, you should demonstrate the SQL injection and that it for instance is possible to drop/delete the `contacts` table with the `sort` query parameter.
You can for instance demonstrate this with a screen recording and include it in the PR description.

After having demonstrated the SQL injection vulnerability, the goal is then to fix the issue by updating `app.js`.

**Hint:** the `multipleStatements: true` part in the Knex configuration indicates how you can use the vulnerability. The Knex configuration should not be changed though, the SQL injection should be fixed by making changes in the `/api/contacts` route.

<br/>

## **Meal sharing endpoints**

You will continue working in the meal-sharing repository for this task. 
<br/>You should have the basic [CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) endpoints for **meals** and **reservations** as the result of last week's homework. This week, you will add **query parameters**, that will allow you to **sort** and **filter** the information retrieved from the database.


### **Routes**

#### **Meals**

Work with your `GET api/meals` route to add the query parameters. <br/>Make sure that the query parameters can be combined, f.x. <nobr>`?limit=4&maxPrice=90`.<nobr/>

| Parameter     | <nobr>Data type<nobr/>| Description           | Example |
| ---------------- | ---------------- | ------------------------------------------------ | ---------------- | 
|`maxPrice`             |Number     |Returns all meals that are cheaper than `maxPrice`.| <nobr>`api/meals?maxPrice=90`<nobr/>|
|`availableReservations`|Boolean    |Returns all meals that still have available spots left. *|<nobr>`api/meals?availableReservations=true`<nobr/>|
|`title`                |String     | Returns all meals that partially match the given title. `Rød grød` will match the meal with the title `Rød grød med fløde`. | <nobr>`api/meals?title=Indian%20platter`<nobr/>|
|`dateAfter`            |Date       |Returns all meals where the date for `when` is after the given date.|`api/meals?dateAfter=2022-10-01`|
|`dateBefore`           |Date       |Returns all meals where the date for `when` is before the given date.|`api/meals?dateBefore=2022-08-08`|
|`limit`                |Number     |Returns the given number of meals.|`api/meals?limit=7`|
|`sort_key`             |String     |Returns all meals sorted by the given key. Allows `when`, `max_reservations` and `price` as keys. Default sorting order = asc. |`api/meals?sort_key=price`|
|`sort_dir`             |String     |Returns all meals sorted in the given direction. Only works combined with the `sort_key` and allows `asc` or `desc`.| <nobr>`api/meals?sort_key=price&sort_dir=desc`<nobr/>|

<br/>

\* `availableReservations` requires you to work with several database tables at once. Try practicing the right query in MySQL Workbench first (you might have it from Database week3 homework) and once you have it working, build it with `knex`. 


<br/>

#### **Reviews** 

By now, you have the basic set of endpoints for **meals** and **reservations** and even a collection of query parameters for **meals**. To practice a bit more and finalize the basic backend functionality, create the set of routes for **reviews**:

| Route                         |HTTP method| Description         |
| ----------------------------- | --------- | ------------------- |
| `/api/reviews`                | GET       | Returns all reviews.  |
| `/api/meals/:meal_id/reviews` | GET       | Returns all reviews for a specific meal. |
| `/api/reviews`                | POST      | Adds a new review to the database. |
| `/api/reviews/:id`            | GET       | Returns a review by `id`. |
| `/api/reviews/:id`            | PUT       | Updates the review by `id`. |
| `/api/reviews/:id`            | DELETE    | Deletes the review by `id`. |

<br/>

#### **Knex**

Remember to check out the [Knex cheatsheet](https://devhints.io/knex)!
