require('dotenv').config();

const express = require('express');
const app = express();

// Local imports
const router = require('./app/routers');

// Body parser
app.use(express.urlencoded({ extended: true }));

// Statically served files
app.use(express.static('./public'));

// Nos Routes
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
