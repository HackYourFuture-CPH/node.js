# Exercises

### Movies

We will be making an api for getting movies 🎞📽🎥🎦🎬

Using the template found [here](./exercise-template). Remember to clone it locally, open a terminal in the folder and run `npm install`. Now how can you start the server??

Try and begin by getting an overview of the project. What file is called when the server is started. What routes is that setting up and so on

Check the [movies router file](./exercise-template/src/backend/api/movies-router.js). This is where you will be creating your routes. The `movies/` route has even been created for you (now you just need to return the movies)

|Route|Requirement|
|---|---|
| `movies/` | Return all movies |
| `movies/year`       | Return all movies from the specified year  |
| `movies?beginYear=<year1>&endYear=<year2>` | Returns all movies with year between `beginYear` and `endYear`  |
| `movies?beginYear=<year1>&endYear=<year2>&minRating=<minRating>` | Returns all movies with year between `beginYear` and `endYear` that are also of rating `minRating` or better |

Finally do some error handling for cases where `beginYear`, `endYear` or `minRating` are not specified

### Is chrome browser middleware

Create a middleware function that creates a key on the `request` object called `isChromeBrowser`. If the browser accessing the website is a chrome browser it should be assigned to `true`, otherwise `false`.

You can add this middleware to the [app.js](./exercise-template/src/backend/app.js)

Remember to test that the middleware works!
