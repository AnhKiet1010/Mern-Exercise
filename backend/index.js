require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost/User',{ useNewUrlParser: true });
mongoose.connection.once('open', function() {
    console.log("-----------data ok!------------");
  });

// import ROUTES
const indexRoute = require('./routes/index.route');
const loginRoute = require('./routes/login.route');
const createRoute = require('./routes/create.route');

//import AUTHENTICATION
const middlewareAuth = require('./middlewares/auth.middleware');

app.get('/getHello', (req, res) => {
  res.json({sayHi: 'Welcome to my page!'})
});

app.use('/login', loginRoute);
app.use('/create', createRoute);

app.use('/book',middlewareAuth.auth, indexRoute);

app.listen(5000, () => {
    console.log('App listening on port 5000')
})