const cars=require('./models/carmodel')



async function createCars(req,res){
    try{
        const newCars=await cars.create(req.body);
        res.status(201).json(newCars);
    }catch(error){
        res.status(500).json({error:'could not create'})
    }
}


async function getAllCars(req,res){
    try{
        const cars = await Cars.find();
        res.json(cars);

    }catch (error){
        res.status(500).json({error:'could not find cars'})
    }
}

async function updateCars(req,res){
    try{
        const updateCars = await Cars.findByIdAndUpdate(req.params.id,req.body,{
            new : true});
            if(!updateCars){
                return res.status(404).json({
                    error:'cars not found'
                })
            }
            res.json(updateCars);          

    }
    catch(error){
        res.status(500).json({error:'could not find user'})
    }
}
async function deleteCars(req,res){
    try{
        const deleteCars= await cars.findByIdAndRrmove(req.params.id);
        if(!deleteCars){
            return res.status(400).json({
                error:'cars not found'
            })
            
        }
        res.json({message:'user deleted successfully'})
        
    }
    catch(error){
        res.status(500).json({error:'Could not delete user'})
    }
}
module.exports={createCars,getAllCars,updateCars,deleteCars}