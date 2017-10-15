import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
const app = express()

// STATIC SERVER PUBLIC FOLDER
app.use(express.static('./public')) // STATIC

const contact_file = fs.readFileSync('./contacts.json', 'utf8') || '[]';

let contacts = JSON.parse(contact_file);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// GET /contact
app.get('/contact', function (req, res) {
    res.send(contacts)
})

// GET /contact/<index>
app.get('/contact/:index', function (req, res) {
    if (contacts[req.params.index]) {
        res.send(contacts[req.params.index])
    } else {
        res.status(404).send('contact not found');
    }
})

// POST /contact
app.post('/contact', function (req, res) {
    console.log(req.body);
    contacts.push(req.body);
    // TODO: promisify this
    fs.writeFile('./contacts.json', JSON.stringify(contacts), (err) => {
        if (err) {
            res.status(500).send('Server Error');
        } else {
            res.send(contacts)
        }
    })
});

// PUT /contact/<index>
// app.put('/contact/:index', function (req, res) {
//     if (contacts[req.params.index]) {
//         res.send(contacts[req.params.index])
//     } else {
//         res.status(404).send('contact not found');
//     }
// });


// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// });

app.put('/contact/:index', function (req, res) {
    var contact = req.contact;

    contact = _.extend(contact, req.body);

    contact.save(function(err) {
    if (err) {
        return res.send('/contact', {
            errors: err.errors,
            contact: contact
        });
    } else {
        res.jsonp(contact);
    }

})


// DELETE /contact/<index>
app.delete('/contact/:index', function(req, res) {
    data = data.filter(function(contact) {
        return contact.index.replace(/ /g, '-') !== req.params.index;
    })
    res.json(data);
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
});


// import express from 'express';
// import bodyParser from 'body-parser';
// import Contact from './Contact';
// import ContactList from './ContactList';
// import fs from 'fs';
// const app = express();