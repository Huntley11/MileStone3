// const { Timestamp } = require("mongodb")
const mongoose=require(`mongoose`)
const Schema=mongoose.Schema

const carsSchema=new Schema({
   
     FirstName:{
          type:String},
     LastName:{
          type:String},
     Email:{
           type:String},
     VehicleMake:{
          type:String},
     VehicleModle:{
          type:String},
     Vehicleyear:{
          type:String}},{timestamps:true}

)
const car =mongoose.model(car,carsSchema)
module.exports=car

