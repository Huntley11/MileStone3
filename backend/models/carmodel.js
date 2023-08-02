const mongoose=require(`mongoose`)

const {Schema}=mongoose


const carSchema= new Schema({
    name:{type:String,required:true},
    make:{type:string},
    modle:{type:string},
    year:{type:Number},
})