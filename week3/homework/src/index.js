import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const routes = require('./routes/api');

// sets up Express
const app = express();

// connect to the db
mongoose.connect('mongodb://localhost/contactlist');
// mongoose.Promise = global.Promise; // setting the promise method on mongoose equal to Node's promise method since mongoose promise method is deprecated

// ====== MIDDLEWARE ==========

app.use(express.static('public'));

// Node.js body parsing middleware. Parses incoming request bodies (available under the req.body property) in a middleware before your handlers. For details, refer to notes.txt. Here we only use the JSON parser.
app.use(bodyParser.json());

// Route handler
app.use(routes);

// Error handler
app.use(function(err, req, res, next){
    // to display the validation error defined in the schema. Status Code 422 indicates an unprocessable entity.
    res.status(422).send({error: err.message}); 
});

// listens for http requests on local port 4000 or if uploaded to Heroku, then on process.env.port
app.listen(process.env.port || 4000, () => 'Express server listening on port 4000...');