const express = require('express');
const router = express.Router();

const { homeController } = require('../controllers');

const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

// Page d'accueil
router.get('/', homeController.index);

// Affichage page formulaire de login
router.get('/login', sessionController.index);
router.post('/login', sessionController.login);

router.get('/logout', sessionController.logout);

// Affichage page formulaire register
router.get('/register', userController.index);
router.post('/register', userController.register);

module.exports = router;
