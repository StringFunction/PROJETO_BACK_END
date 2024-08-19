// models/productImage.js

const { DataTypes } = require('sequelize');
const conn = require('../config/database'); // ajuste o caminho conforme sua estrutura
const Produtos = require('./ModelProduto'); // ajuste o caminho conforme necessário

const ProtudosImagem = conn.define('ProdutosImagens', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produtos, // Tabela de referência (products)
      key: 'id' // Chave de referência
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

Produtos.hasMany(ProtudosImagem, {foreignKey : "id_produto"})
ProtudosImagem.belongsTo(Produtos, {foreignKey : "id_protuto"})
conn.sync().then(()=> {
  console.log("Sincronizao model ProtudosImagens");
  
}).catch(erro => console.log(erro)
)
module.exports = ProtudosImagem;
