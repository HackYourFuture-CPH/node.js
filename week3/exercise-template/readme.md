# concerts api

## Installing
To install run `npm install`

## 🎈 Usage <a name="usage"></a>
To run `npm run dev`

#### Creating the database

Create a `concerts` table in Mysql Workbench using the sql below

```sql
CREATE SCHEMA `concerts`;

CREATE TABLE `concerts`.`concerts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `band` VARCHAR(255) NULL,
  `venue` VARCHAR(255) NULL,
  `created_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `performance_date` DATETIME NULL,
  `price` INT(45) NULL,
  PRIMARY KEY (`id`));
```

#### Setting up the project

Lets create an api for concerts

Use this template

Remember to copy the `.env.example` file, and rename the copied file to `.env`. In the `.env` file add the relevant host, database name, database user and pasword to your own local database. If you are unsure of these things then select your database in the Mysql Workbench. Now press `Database` -> `Manage Connections...`. Here you can see everything you need except the password. If you forgot that, reset it.  

Now you can `cd` into the project and run `npm install` and then `npm run dev`


#### Routing

Create the following routes

| Url                 | Verb   | Functionality               | Example              |
| ------------------- | ------ | --------------------------- | -------------------- |
| `api/concerts/`     | GET    | Returns all concerts        | `GET api/concerts/`  |
| `api/concerts/`     | POST   | Adds a new concert          | `POST api/concerts/` |
| `api/concerts/{id}` | GET    | Returns concert by `id`     | `GET api/concerts/2` |
| `api/concerts/{id}` | PUT    | Updates the concert by `id` | `PUT api/concerts/2` |
| `api/concerts/{id}` | DELETE | Deletes the concert by `id` | `DELETE api/concerts/2`  |

#### Query parameters

| Parameter      | Description                                                                                                       | Data type | Example                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------- |
| `maxPrice`     | Get concerts that has a price smaller than `maxPrice`                                                             | Number    | `api/concerts?maxPrice=160`               |
| `title`        | Get concerts that partially match a title. `Metallic` will match the concert with the title `Metallica in Parken` | String    | `api/concerts?title=metallic`          |
| `createdAfter` | Get concerts that has been created after the date                                                                 | Date      | `api/concerts?createdAfter=2019-04-05` |
| `band`         | Get concerts with a specific band                                                                                 | String    | `api/concerts?band=metallica`          |

#### Use the api using postman

Using post man insert some concerts, get some concerts using query parameters, delete some concerts and update some concerts
