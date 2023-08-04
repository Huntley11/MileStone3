let express=require(`express`)
let serv=express.Router()

let serv=require(`./models/serv_models.js`)

Router.post(`/`,(req,res)=>{
    console.log(req.body)
    if(!req.body.pic){
        req.body.pic='http://placekitten.com/400/400'
    }
    car.push(req.body)
    res.redirect(`/car`)
})

serv.get(`/:id`,(req,res)=>{
    serv.findById(req.params.id )
    .then(foundserv=>{
        
    }),

    res.send(`this is the serv index at /car`)

})
serv.push()
serv.get(`./:id/edit`,(req,res)=>{
    serv.findById(req.params.id)
    .then(foundserv=>{
        res.render(`edit`,{
            serv:serv
        })
    })
}),
module.exports=cars 