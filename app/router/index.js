const express = require('express');
const router = express.Router();

const { homeController, userController, financeController, adminController } = require('../controllers');
const { auth, isAdmin, rateLimiter } = require('../../middlewares');

// Page d'accueil
router.get('/', homeController.index);
router.get('/cgu', homeController.cgu);

router.get('/register', userController.indexRegister);
router.post('/register',rateLimiter, userController.register);

router.get('/login', userController.indexLogin);
router.post('/login',rateLimiter, userController.login);

router.get('/logout', userController.logout);

router.get('/finance', auth, financeController.index);
router.post('/finance/add/:id', auth, financeController.addMovement);
router.post('/finance/monthlyadd/:id', auth, financeController.addMonthlyModel);
router.patch('/finance/edit/:id', auth, financeController.editOneMovement);
router.get('/finance/delete/:id', auth, financeController.deleteOneMovement);

router.get('/finance/monthlyedit', auth, financeController.manageMonthlyMovements);
router.get('/finance/addmonthly', auth, financeController.createMovementsByMonthly);

router.get('/admin/categories',auth, isAdmin, adminController.allCategories);
router.post('/admin/addcategory',auth, isAdmin, adminController.addCategory);
router.get('/admin/category/edit/:id',auth, isAdmin, adminController.displayModifyCategory);
router.post('/admin/category/edit/:id',auth, isAdmin, adminController.modifyCategory);
router.get('/admin/category/delete/:id',auth, isAdmin, adminController.deleteCategory);

// router.get('*', homeController.errorPage);

module.exports = router;
