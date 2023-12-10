const express = require('express');
const CustomerController = require('../controller/UserController');


const router = express.Router();


router.post('/signup',CustomerController.signup);
router.post('/login',CustomerController.login);

module.exports=router;
