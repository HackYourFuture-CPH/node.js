## Exercises

### Portfolio

#### Setup

To get started use this node project on your computer: 
- Clone the [node js repo](https://github.com/HackYourFuture-CPH/node.js)
- Open up a terminal
- `cd` into `nodej.js/week1/exercise-template`

Then you need to run these commands: 

`npm install`

then:

`npm run server`

Now go to [localhost:3000/](http://localhost:3000/).

### Requirements

To get an understanding of the tasks to complete, run the test command:

`npm test`

If you read this output closely, you will see that all tests fail, because the correct result is not being met, because routes are missing and HTML is also missing.

To get some tests passing, ensure your webserver has these routes:

| Route         
| -------------
| `/`
| `/contact`
| `/educations`
| `/skills`

Now, running `npm test` should result in a few tests passing.

Next, start adding information in the HTML of the specific routes to match these descriptions.

| Route         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `/`           | Add a title and subtitle. Write a couple lines about yourself  |
| `/contact`    | Add social media links and your email                          |
| `/educations` | Add a list of your educations                                  |
| `/skills`     | Add a list of your skills                                      |


#### Changing the title of the page

Firstly try change the title of the Home page to say Home. https://www.w3schools.com/tags/tag_title.asp

Now hopefully you know how to change the title of a page. 

Continuing on the last exercise. Lets add some functionality that shows the relevant title of a page using modules! 

So when navigating to `/` the title will be Home, when navigating to `/contact` the title will be contact and so on

- Create a function that takes title as parameter
- Calling the function returns the html for the `head` tag and the `title` tag.
- Export the function using `module.exports` see [here](./teacher-live-coding/src/backend/created-module.js) for how to create a module
- Import the function using `require`

Here are the routes and their corresponding title

| Route         | Page title |
| ------------- | ---------- |
| `/`           | Home       |
| `/contact`    | Contact    |
| `/education`  | Education  |
| `/skills`     | Skills     |

Now add this rendered html (with the head and title tag) to the different routes.

#### Adding styling

Lets add some styling to our page. We will do it with inlining styles for now. Which should be avoided normally, but for now it is okay.

Change the previous header function to add some inline styling in the head tag.

Try and see if you can create a module with only the css as a string.

#### Adding a projects route

| Route       | Description                     |
| ----------- | ------------------------------- |
| `/projects` | Renders a list of your projects |

| Route       | Page title |
| ----------- | ---------- |
| `/projects` | Projects   |

A project should have: `title`, `codeUrl`, `previewUrl` and `img`.

Now when the the `projects` route is hit, respond with some rendered html of your projects!
