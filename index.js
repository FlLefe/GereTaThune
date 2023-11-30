require('dotenv').config();

const express = require('express');
const app = express();

const { loadUserToLocals, initSession } = require('./middlewares')

const router = require('./app/router');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./assets'));

app.use(initSession);

app.use(loadUserToLocals);

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
