const conn = require("../config/database")
const {DataTypes} = require("sequelize")



const Produto = conn.define('Produtos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price_with_discount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false // Ajuste se necessário
});

conn.sync().then(() => console.log(`Sincronizacao model produtos realizadas`)).then((erro) => console.log(erro));



module.exports = Produto