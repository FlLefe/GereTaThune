require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();

const { loadUserToLocals, initSession } = require('./middlewares')

const router = require('./app/router');
app.use(initSession);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./assets'));

app.use(cors({
    origin: 'http://127.0.0.1:5500/', // Remplace avec l'URL de ton front-end
    credentials: true,
}));

app.use(loadUserToLocals);

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
