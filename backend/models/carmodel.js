const mongoose=require(`mongoose`)

const cars_schema=new mongoose.Schema({
     FirstName:String,
     LastName:String,
     VehicleMake:String,
     VehicleModle:String,
     Vehicleyear:String,
     
})
const cars=mongoose.model('cars',cars_schema)
models.exports=cars

