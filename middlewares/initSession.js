const expressSession = require('express-session');

const session = expressSession({
  resave: true,
  saveUninitialized: true,
  secret: process.env.APP_SECRET,
  cookie: {
    secure: false, // On n'est pas en https
    maxAge: 1000 * 60 * 60, // ça fait une heure
  },
});

module.exports = session;