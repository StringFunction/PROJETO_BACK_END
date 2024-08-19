const { json, where } = require('sequelize')
const app = require('../app')
const User = require("../models/ModelUsuario")
//CADASTRA NOVO USUARIO
app.post("/v1/user", async(req,res) =>{
    const email = await User.findOne({where : {
        email : req.body.email
    }})
    if (!email){
        User.create(req.body).then((result) =>{
        res.status(201).send(result)
        }).catch(erro => res.status(400).send("Dados incorretos")
        )
     
    }else{
        res.status(404).send("Email ja cadastrado")
    }

    // const email =  await
   
})
//BUSCA UM USUARIO PELO ID
app.get("/v1/user/:id", async (req, res)=>{
    result = await User.findOne({where : {
        id: req.params.id
    }})
    if (result){
        res.status(201).send(result)
    }else{
        res.status(404).send(`Usuario n encontrado `)
    }
})
//BUSCA TODOS OS USUARIO
app.get("/v1/user", async(req, res)=>{
    restultado =  await User.findAll()
    res.sendStatus(200).send(restultado)
})
//ATUALIZA DADOS DO USUARIO
app.put("/v1/user/:id", async (req, res) => {
    const resultado  = await User.findByPk(req.params.id)
    if(resultado){
        const resultado2 = await User.update(req.body, {where : { id : req.params.id}}) 
        res.sendStatus(200).send(json(resultado2))
    }else{
        res.sendStatus(404).send("usuario nao identificado")
    }
})

//DELETE USUARIO
app.delete("/v1/user/:id", async (req, res) => {
    resultado  = await User.findByPk(req.params.id)
    if(resultado){
        const resultado2 = await User.destroy({where : { id : req.params.id}}) 
        res.sendStatus(200).send(resultado2)
    }else{
        res.status(404).send("usuario nao identificado")
    }
})