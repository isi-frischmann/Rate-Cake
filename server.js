const path = require('path');

// console.log(' 1 Your server file run');

// server
const port = 8000;

// express
var express = require('express');
const app = express();

// connection to the Angular files
app.use(express.static(__dirname + '/public/dist/public'));

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ============ Session ============
const session = require('express-session');
app.use(session({
    secret: 'sdf23hier4',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 } // maxAge is in milliseconds
}));

// ============ Flash Messages ============
const flash = require('express-flash');
app.use(flash());

const dbName = 'rateCake_db';

// DB connection
require('./server/config/mongoose.js')(dbName);

// model file
require('./server/models/cake.models.js');


// routes
require('./server/config/routes.js')(app);

const server = app.listen(port);