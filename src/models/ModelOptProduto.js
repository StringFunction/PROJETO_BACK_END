const conn = require("../config/database")
const {DataTypes} = require("sequelize")

const Produto = require('./ModelProduto'); // Modelo do produto
const ProdutoOption = conn.define('ProdutoOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto, // Nome do modelo referenciado
      key: 'id', // Chave primária da tabela referenciada
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shape: {
    type: DataTypes.ENUM('square', 'circle'),
    allowNull: true,
    defaultValue: 'square',
  },
  radius: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  type: {
    type: DataTypes.ENUM('text', 'color'),
    allowNull: true,
    defaultValue: 'text',
  },
  values: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  
  timestamps: false,
});
Produto.hasMany(ProdutoOption, {foreignKey: "id_produto"})
ProdutoOption.belongsTo(Produto, {foreignKey : "id_produto"})


module.exports = ProdutoOption;
