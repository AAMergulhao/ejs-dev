const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const expressLayouts = require('express-ejs-layouts');

const { database, cookieKey } = require('./config/keys');

const routes = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 8088;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //Tempo de vida do cookie(1 dia)
    keys: [cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(database.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(Error, err.message);
    });

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.json());

app.use(routes);

app.listen(PORT, (err) => {
    if (!err) {
        console.log('Server listening on', PORT);
    } else {
        console.log('Error:', err);
    }
});