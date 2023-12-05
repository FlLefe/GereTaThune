const express = require('express');
const router = express.Router();

const { homeController, userController, financeController, adminController } = require('../controllers');
const { auth, isAdmin } = require('../../middlewares');

// Page d'accueil
router.get('/', homeController.index);
router.get('/cgu', homeController.cgu);

router.get('/register', userController.indexRegister);
router.post('/register', userController.register);

router.get('/login', userController.indexLogin);
router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.get('/finance', financeController.index);
router.post('/finance/add/:id', financeController.addMovement);

router.get('/admin/color', adminController.color);
router.post('/admin/color', adminController.modifyColor);
module.exports = router;
