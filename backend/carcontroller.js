let express=require(`express`)
let car=express.Router()

let car=require(`./models/carmodel`)



car.get(`/:id`,(req,res)=>{
    cars.findById(req.params.id )
    .then(foundCar=>{
        
    }),

    res.send(`this is the car index at /car`)

})


Router.get('./',(req,res)={
    res.send('GET /car')
})


cars.get(`./:id/edit`,(req,res)=>{
    car.findById(req.params.id)
    .then(foundCar=>{
        res.render(`edit`,{
            serv:foundCar
        })
    })
}),
module.exports=router