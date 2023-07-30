const express =require ("express")
const mongoose = require('mongoose')


app.use(express.json())


app.listen(27016,function(){
    console.log("express server is running on port 27017")
  })