const express =require ("express");
const mongoose = require('mongoose');
const router=require('./router')

const app=express()
app.use(express.json())
const mongoose=require (`mongoose`)


mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.listen(27016,function(){
    console.log("express server is running on port 27017")
  })
 app.use('/api',carRoutes);