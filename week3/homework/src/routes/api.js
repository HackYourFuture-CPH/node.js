import express from 'express';

import Contact from '../models/contact';

// ======= EXPRESS ROUTER INITIALIZED =====
const router = express.Router();

// ======= SETTING UP ROUTES ===============
// retrieves all the contacts stores in the contact list
router.get('/contacts', function(req, res, next){
    Contact.find({}).then(function(contacts){
        res.send(contacts);
    });
});

// creates a new contact in the contact list
router.post('/contacts', function(req, res, next){
    // using the create method of Mongoose (which is a promise), a new instance of the contact is created. The then method uses a callback function which carries the newly created contact as an argument, which we then use to send as a response to the client.
    Contact.create(req.body).then(function(contact){
        res.send(contact);
    }).catch(next);
});

// modifies an existing contact in the contact list
router.put('/contacts/:id', function(req, res, next){
    Contact.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Contact.findOne({_id: req.params.id}).then(function(contact){
            res.send(contact);
        });
    });
});

// deletes a specific contact from the contact list
router.delete('/contacts/:id', function(req, res, next){
    Contact.findByIdAndRemove({_id: req.params.id}).then(function(contact){
        console.log(`contact with id: ${req.params.id} successfully deleted...`);
        res.send(contact);
    });
});

// exports the routes
module.exports = router;