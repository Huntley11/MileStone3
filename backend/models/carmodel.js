const mongoose=require(`mongoose`)

const {Schema}=mongoose


const carSchema= new schema({
    name:{type:String,required:true},
    make:{type:string},
    modle:{type:string}
})