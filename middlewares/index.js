const auth = require('./auth');
const isAdmin = require('./isAdmin');
const loadUserToLocals = require('./loadUserToLocals');
const initSession = require('./initSession');


module.exports = { auth, isAdmin, loadUserToLocals, initSession }