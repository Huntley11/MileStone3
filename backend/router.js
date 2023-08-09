const express = require('express');
const router=express.Router();
const cars= require('./models/carmodel');




router.post('/',);

router.get('/cars',carController.getAllCars);
router.put('/cars/:id',carController.updateCars);
router.delete('/cars/:id',carController.deleteCars);


module.exports=router