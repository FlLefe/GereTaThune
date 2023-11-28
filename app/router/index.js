const express = require('express');
const router = express.Router();

const { homeController, userController, financeController } = require('../controllers');
const { auth, isAdmin } = require('../../middlewares');

// Page d'accueil
router.get('/', homeController.index);

router.get('/register', userController.indexRegister);
router.post('/register', userController.register);

router.get('/login', userController.indexLogin);
router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.get('/finance', auth, financeController.index);

// // Affichage page formulaire de login
// router.get('/login', sessionController.index);
// router.post('/login', sessionController.login);

// router.get('/logout', sessionController.logout);

// // Affichage page formulaire register
// router.get('/register', userController.index);
// router.post('/register', userController.register);

module.exports = router;
