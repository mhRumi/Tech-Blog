
const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');
const authController = require('../controllers/authController');

router.get('/:id', authController.protect, likesController.isLiked);
router.post('/',authController.protect, likesController.doLike);




module.exports = router;