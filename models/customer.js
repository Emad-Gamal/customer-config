const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let Customer = new Schema({
    customerID: {
        type: Number
    },
    name: {
        first: String,
        last: String
    },
    birthday: {
        type: String
    },
    gender: {
        type: String
    },
    lastContact: {
        type: String,
    },
    customerLifetimeValue: {
        type: Number
    }
});

module.exports = mongoose.model('customer', Customer);
