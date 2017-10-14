import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create Contact schema
const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Cannot create a new contact without a name property']
    },
    phone: {
        type: Number
    }
});

// create Contacts model
const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;