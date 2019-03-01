const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();


//View Engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname,'/client/dist')));
app.set('views',path.join(__dirname,'/client/dist'));

app.use(cors());
app.use(bodyParser.json());

// Routing resources
app.use('/api/', require('./routes/customer.js')); // CRUD API routinh
app.use('*', require('./routes/index.js')); // Client side routing


const port = process.env.PORT || 4000; // process.env.PORT used for Heroku deployment
app.listen(port, () => console.log(`Express server running on port ${port}`));
