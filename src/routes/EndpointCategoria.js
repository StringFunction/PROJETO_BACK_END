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