const express =require ("express");
const mongoose = require('mongoose');
const router=require('./router')
const bodyParser= require('body-parser')
const app=express()
app.use(express.json())
require('dotenv').config({path: __dirname + '/.env'})
console.log(require('dotenv').config())


app.use('/api',router);
app.use(bodyParser.json());

app.post('/api/cars',(req,res)=>{
  const carData=req.body
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri= process.env.MONGOOSE_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
const PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log(`express server is running on port ${PORT}`)
  })
