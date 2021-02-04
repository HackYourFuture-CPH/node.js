## Exercises

### Portfolio

This week exercises are about creating a web server that sends specific information about your education and background at corresponding endpoints. The information that these endpoints will be serving will primarily be HTML and CSS this week, but that is rarely the purpose of a web server.

In the following weeks, you will be practicing sending back specific information based on the client's request and saving/deleting data based on client requests. Exciting!

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

To get an overview of the tasks to complete, run your server, and navigate to the test report endpoint:

[localhost:3000/test-report](http://localhost:3000/test-report)

The test report is "synced" with nodemon, so this means that whenever you save code changes, you can navigate to/refresh the test-report endpoint, and your code will be tested in real time!

To get some tests passing, ensure your webserver has these routes:

| Route         
| -------------
| `/`
| `/contact`
| `/education`
| `/skills`

After creating those routes, take a look at the [test report endpoint](http://localhost:3000/test-report) again, and notice that there are now tests passing.

Next, start adding information in the HTML of the specific routes to match these descriptions.

| Route         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `/`           | Add a title and subtitle. Write a couple lines about yourself  |
| `/contact`    | Add social media links and your email                          |
| `/education` | Add a list of your education                                  |
| `/skills`     | Add a list of your skills                                      |


#### Changing the title of the page

First, try changing the title of the Home page to say Home. https://www.w3schools.com/tags/tag_title.asp

Hopefully you can recall how to change the title of a page from the HTML/CSS module.

Continuing on the last exercise. Lets add some functionality that shows the relevant title of a page using modules! We want to create a helper function that, provided the title of the page, returns the necessary HTML with the page title included.

Thus, when navigating to `/` the title will be Home, when navigating to `/contact` the title will be contact and so on. To complete this task, do the following:

- Create a function that takes title as parameter
- Calling the function returns the html for the `head` tag and the `title` tag.
- Export the function using `module.exports` see [here](https://youtu.be/R-dl4-VnZYA?t=615) for how to create a module
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

Now when the the `projects` endpoint is hit, respond with some rendered html of your projects!
