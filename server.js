// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require the Express Module
var express = require('express');
// Require path
var path = require('path');
const session = require('express-session');

const cookieParser = require('cookie-parser')

const port = 9200;
// Create an Express App
const app = express();

const sessionConfig = {
    saveUninitialized: true,
    secret:'session-secret',
    resave: false,
    name: 'session', //name of the cookie
    rolling: true, //cookie is updated, get another 15 minutes
    cookie:{
        secure: false, //does not require https
        httpOnly: false,
        maxAge: 360000,
    }
};


// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Static Directory
app.use(express.static(__dirname + '/angular/dist'));
//use the session middleware
app.use(session(sessionConfig)); //creates a state
//use the cookParser
app.use(cookieParser('oisajfoijasofjoawef'));

//The db and routes
require('./server/config/database')
app.use('/api',require('./server/config/routes'));
//I think I need this additional line
app.use('/api',require('./server/config/auth.routes'));
//

app.use(require('./server/config/catch-all.route'))


// CORS
const cors = require('cors');
app.use(cors());

// Use native promises
//mongoose.Promise = global.Promise;
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

app.listen(port, ()=> console.log(`Express server listening on port ${port}`));


