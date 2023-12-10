const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;


//=============================
const customerRoute = require('./route/CustomerRoute');
const UserRoute = require('./route/UserRoute');
//=============================


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://127.0.0.1:27017/customer_crud')
.then(()=>{
app.listen(port,()=>{
console.log(`api started & running on port ${port}`);
});
});



//=====================
app.use('/api/v1/customers', customerRoute); // http://localhost:3000/api/v1/customers/save-customer(POST)
app.use('/api/v1/users', UserRoute); // http://localhost:3000/api/v1/customers/save-customer(POST)
//=====================
