const app = require('../app')
const User = require("../models/model_usuario")

app.post("/v1/user",(req,res) =>{
    User.create(req.body).then((result) =>{
        res.status(201).send(result)
    })
})

app.get("/v1/user/:id", (req, res)=>{
    User.findOne({where : {
        id: req.params.id
    }}).then((result) => {
        res.status(201).send(result)
    })
})