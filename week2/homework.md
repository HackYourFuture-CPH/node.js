# Homework

## So why this homework?
Express is such a core library for NodeJs that can help us with many things when building out a fully fledged webserver. Connecting the webserver to database makes it possible for us to store data for an application. 

> Please help us improve and share your feedback! If you find better tutorials or links, please share them by opening a Pull Request.

## Warmup

Lets use express routes to create a small calculator

1. Create new empty folder called warmup. Open it in Visual Studio Code. Open the terminal.
2. Initialize new Npm project, install `express` library, create `index.js` with code to run new express server on port `3000`.
3. Add 2 routes to your `index.js`:
  - GET `/numbers/add?first=<number here>&second=<number here>`. In response send sum (first + second).
  - GET `/numbers/multiply/<first number here>/<second number here>`. in response send multiplication (first * second).

Example:
going to `localhost:3000/numbers/add?first=3&second=7` should respond with 10

Hints:
- Find express documentation online.
- Use req.query and res.params properties on req object.

## Meal sharing website

Create two files `meals.js` and `reservation.js` with an array of objects containing meals and an array of objects containing reservations, like this:

`meals.js`
```js
const meals = [
  {
    id: 1,
    title: 'Indian food in the summer',
    maxNumberOfGuests: 5,
    description: 'A nice night out eating delicious indian food',
    createdAt: '2019/12/7 14:34',
    price: 67,
  },
  ...
];
```

`reservations.js`
```js 
const reservations = [
  {
    name: 'Benjamin Hughes',
    email: 'benjamin@hughes.dk',
    mealId: 1,
  },
  ...
];
```

`Export` the arrays and `require` them where you need them.

We will start with adding a few routes:

| Route | Description |
| ---- | ----- |
| `/meals/{id}` | Respond with the json for the meal with the corresponding `id` |
| `/meals` | Respond with the json for all the meals found in the database. |
| `/reservations/{id}` | Respond with the json for the reservation with the corresponding `id` |
| `/reservations` | Respond with the json for all reservations |

### /meals

The `/meals` route should support some query parameters:

| Parameter | Description | Data type | Example | 
| ---- | ----- | ---- | -------- |
| `maxPrice` | Get meals that has a price smaller than `maxPrice` | Number | `/meals?maxPrice=90` |
| `title` | Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` | String | `api/meals?title="Indian platter"` |
| `createdAfter` | Get meals that has been created after the date | Date | `api/meals?createdAfter=2019-04-05` |
| `limit` | Only specific number of meals | Date | `api/meals?limit=4` |

Some extra things to think about: 
- What if there is no meal with the requested id in the relevant array?
- What if the users writes a string as id? fx "/meals/lol"
- What if the users writes a query parameter that is not supported?

### Work with middleware
Lets create a middleware function that logs out the time, a request was received and the path. The log should look like this:

`2019-11-07 11:41 request received for path: /meals/3`

