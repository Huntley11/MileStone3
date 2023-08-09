require('dotenv').config({path: __dirname + '/.env'})
const express =require ("express");
// const { error } = require("console");
const app=express()
app.use(express.json())
const car=require(`./models/carmodel`)
console.log(require('dotenv').config())
const mongoose = require('mongoose');
// const carsroutes=require('./routes/cars')
const bodyParser= require('body-parser');
// app.use('/api',router);
// app.use(bodyParser.json());
// app.use((req,res)=>{
//   console.log(req.path,req.method)
//   next()
// })
// app.use('/api/cars',carsroutes)




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://HuntlyDavid:RTutLkQKLCfyIiNO@car-app.3uyi2j9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
app.post('/createcar', async (req,res)=>{
  const {FirstName,LastName,Email,VehicleMake,VehicleModle,Vehicleyear}= req.body
  try {
      const Car= await car.create({FirstName,LastName,Email,VehicleMake,VehicleModle,Vehicleyear,})
      res.status(200).json(Car)
      
  } catch (error) {
      res.status(400).json({error: error.message})
  }
  })

const PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log(`express server is running on port ${PORT}`)
  })
