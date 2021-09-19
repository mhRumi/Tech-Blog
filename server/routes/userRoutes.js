const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const credentialController = require('../controllers/credentialController');


router.get('/me', authController.protect, userController.getSingleUser);
router.post('/login', credentialController.login);
router.post('/broadcast', authController.protect, userController.broadcastUser);
router.get('/logout', authController.protect, credentialController.logout);
router.post('/register', /*authController.protect, authController.restrictTo('superadmin', 'admin'),*/ userController.registerUser);
router.get('/:reg_no', authController.protect, userController.getSingleUser);
router.delete('/:reg_no', authController.protect, authController.restrictTo('superadmin', 'admin'), userController.deleteUser)
router.patch('/update', authController.protect, userController.updateUser);
router.patch('/setstatus', authController.protect, authController.restrictTo('superadmin', 'admin'), userController.setStatus);
router.patch('/setadmin', authController.protect, authController.restrictTo('superadmin'), userController.setAdmin);
router.patch('/removeadmin/:reg_no', authController.protect, authController.restrictTo('superadmin'), userController.removeAdmin);
router.get('/', userController.getAllUser);
router.post('/password/forgot', credentialController.forgotPassword);
router.patch('/password/update', authController.protect, credentialController.updatePassword);
router.patch('/password/reset/:token', credentialController.resetPassword);
router.post('/email/requestchange', authController.protect, credentialController.requestEmailChange);
router.patch('/email/change', authController.protect, credentialController.changeEmail);


module.exports = router;

//authController.protect, authController.restrictTo('superadmin', 'admin'),