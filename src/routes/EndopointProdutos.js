const Produto = require("../models/ModelOptProduto")
const ProdutoImagem = require("../models/ModelImagenProtudo")
const OptProduto = require("../models/ModelOptProduto")
const app = require("../app")
//CRIANDO PRODUTO
app.post("/v1/product",async (req, res) =>{
   try{
    Produto.create(req.body).then((result)=>{
        res.status(200).send(result)
    }).catch((erro)=>{
        res.status(404).send("dados incorretos")
        console.log(erro);
    })

    // await ProdutoImagem.bulkCreate(req.body.images.map((img) => ({
    //     id_produto : produto.id,
    //     type: img.type,
    //     content: img.content
    // })))

    // await OptProduto.bulkCreate(req.body.options.map((option) => ({
    //     produto_id: produto.id,
    //     title: option.title,
    //     shape: option.shape,
    //     radius: option.radius,
    //     type: option.type,
    //     values: option.values
    // })))
    // res.status(200).send("deu bom ")
}
catch (erro){
    res.status(401).send(console.log(erro))
}
})






    //BUSCANDO PRODUTO COM ID 
app.get("/v1/product/:id", async(req, res) =>{
   
    const resultaProduto =  await Produto.findByPk(req.params.id)
    if (resultaProduto){
        res.status(200).send(resultaProduto)
    } else{
        res.status(400).send('Produto nao cadastrado')
    }
})

// ATUALIZANDO PRODUTO 
app.put("/v1/product/:id", async(req, res) =>{
    const resultaProduto =  await Produto.findByPk(req.params.id)
    if (resultaProduto){
        Produto.update(req.body, {where : {id : req.params.id}}).then((result) =>{
            res.status(204).send(result)
        }).catch(()=>{
            res.status(400).send("Dados incorretos")
        })
    } else{
        res.status(404).send('Produto nao cadastrado')
    }
})
//EXCLUINDO PRODUTO
app.delete("/v1/product/:id", async(req, res) =>{
    const resultaProduto =  await Produto.findByPk(req.params.id)
    if (resultaProduto){
        Produto.destroy({where : {id : req.params.id}}).then((result) =>{
            res.status(204).send(result)
        }).catch(()=>{
            res.status(400).send("Dados incorretos")
        })
    } else{
        res.status(404).send('Produto nao cadastrado')
    }
})
