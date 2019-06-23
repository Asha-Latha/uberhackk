const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


//user routes
router.post('/register',usersController.register);
module.exports = router;



