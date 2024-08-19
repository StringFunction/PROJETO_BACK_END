const Categoria = require("../models/ModelCategoria")
const app = require("../app")
const { json } = require("sequelize")

//BUSCA CATEGORIA DE ACORDO COM ID
app.get("/v1/category/:id", async(req, res) => {
    const produto = await Categoria.findByPk(req.params.id)
    if (produto){
        res.status(200).send(produto)
    }else{
        res.status(400).send(json("PRODUTO N IDENTIFICADO"))
    }
})
//CADASTRO DE CATEGORIA

app.post("/v1/category", async (req, res) => {
    try{
    const cadastrado = await Categoria.create(req.body)
    if (cadastrado){
        res.status(201).send(cadastrado)
    }
}
catch (erro){
    res.status(400).send(erro)
    
}

})

//ATUALIZANDO DE CATEGORIA 
app.put("/v1/category/:id", async(req, res) =>{
    try {
        const respota_usuario = await Categoria.findByPk(req.params.id)
        if (respota_usuario){
            Categoria.update(req.body, {where : {id : req.params.id}}).then(() =>{
                res.status(204).send(upt)
            }).catch(() =>{
                res.status(400).send("dados incorretos")
            })
            
        }else{
            res.status(404).send("Usuario n existe")
        }
    } catch (error) {
        res.status(400).send("dados incorretos")
        
    }
})
app.delete("/v1/category/:id", async(req, res) =>{
    const respota_delete = await Categoria.findByPk(req.params.id)
    if (respota_delete){
        Categoria.destroy({where : {id : req.params.id}}).then(() =>{
            res.status(204).send(upt)
        }).catch(() =>{
            res.status(400).send("dados incorretos")
        })
        
    }else{
        res.status(404).send("Usuario n existe")
    }

})