const express = require('express');
const carController= require('./carcontroller')

const router=express.Router()

router.post('/cars',carController.createCars);
router.get('/cars',carController.getAllCars);
router.put('/cars/:id',carController.updateCars);
router.delete('/cars/:id',carController.deleteCars);


module.exports=router