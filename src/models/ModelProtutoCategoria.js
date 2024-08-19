const Produto = require("./ModelProduto")
const Categoria = require("./ModelCategoria")
const conn = require("../config/database")

Produto.belongsToMany(Categoria, { through : "ProdutosCategorias" , foreignKey : "produto_id"}
)
Categoria.belongsToMany(Produto, {through : "ProdutosCategorias", foreignKey : "categoria_id"})


conn.sync().then(() => console.log("Sincronizacao ProtudosCategoria realizada")
).catch(erro => console.log(erro))