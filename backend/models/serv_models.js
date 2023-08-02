const mongoose=require(`mongoose`)

const {Schema}=mongoose


const serv_schema= new Schema({
    name:{type:String,required:true},
    
    description:{type:string},
    
})