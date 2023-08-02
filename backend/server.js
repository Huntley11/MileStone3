const express =require ("express")
const mongoose = require('mongoose')


app.use(express.json())
const mongoose=require (`mongoose`)


mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.listen(27016,function(){
    console.log("express server is running on port 27017")
  })
  module.exports.cars_schema=(`./models/carmodel`)
  module.exports.serv_schema=(`./modles/serv_models`)