const Customer = require('../models/customer');  // Datat model
const mongoose = require('mongoose'); // ORM
const express  = require('express'); // Express frame initiate
const router = express.Router();

// MLab database connection string and connection
var mongodbUri ='mongodb+srv://emad:gamal@cluster0-huuyh.mongodb.net/Dev?retryWrites=true';
mongoose.connect(mongodbUri, {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () =>{
 console.log('connected to adatabase')
});
//------------------------------------------------------------//



// CRUD opertion 
router.route('/customer').get((req, res) => {
    Customer.find((err, customer) => {
        if (err)
            console.log(err);
        else
            res.json(customer);
    });
});

router.route('/customer/:id').get((req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (err)
            console.log(err);
        else
            res.json(customer);
    })
});

router.route('/customer/').post((req, res) => {
    let customer = new Customer(req.body);
    customer.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
          console.log(err);
            res.status(400).send('Failed to create new record');
        });
});


router.route('/customer/:id').put((req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (!customer)
            return next(new Error('Could not load Document'));
        else {
            customer.name = req.body.name;
            customer.birthday = req.body.birthday;
            customer.gender = req.body.gender;

            customer.save().then(customer => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});


router.route('/customer/:id').delete((req, res) => {
    Customer.findOneAndDelete({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

module.exports = router;
