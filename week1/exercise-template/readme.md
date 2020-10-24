## Exercises

### Portfolio

#### Setup

To get started use the node project [here](./exercise-template). That means cloning the [node js repo](https://github.com/HackYourFuture-CPH/node.js), opening up a terminal, cd into the folder. Then you need to run these commands: 

`npm install`

then

`nodemon ./src/backend/index.js`

Now go to localhost:3000/

### Requirements

First, using the same structure as [here](./exercise-template), start building your portfolio with these routes:

| Route         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `/`           | Add a title and subtitle. Write a couple lines about yourself |
| `/contact`    | Add social media links and your email                          |
| `/educations` | Add a list of your educations                                  |
| `/skills`     | Add a list of your skills                                      |

To get an understanding of the tasks to complete, run the test command:

`npm test`

#### Changing the title of the page

Continuing on the last exercise. Lets add some functionality that shows the relevant title of a page using modules!

- Create a function that takes title as parameter
- Calling the function returns the html for the `head` tag and the `title` tag with the title tag set as the parameter
- Export the function using `module.exports` see [here](./teacher-live-coding/src/backend/created-module.js) for how to create a module
- Import the function using `require`

Here are the routes and their corresponding title

| Route         | Page title |
| ------------- | ---------- |
| `/`           | Home       |
| `/contact`    | Contact    |
| `/educations` | Education  |
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
| `/projects` | projects   |

A project should have: `title`, `codeUrl`, `previewUrl` and `img`.

Now when the the `projects` route is hit, respond with some rendered html of your projects!