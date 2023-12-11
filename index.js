require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();

const { loadUserToLocals, initSession } = require('./middlewares')

const router = require('./app/router');
app.use(cors());
app.use(initSession);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./assets'));

app.use(loadUserToLocals);

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
