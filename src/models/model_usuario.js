const { DataTypes } = require("sequelize");
const conn =  require("../config/database")



const User =  conn.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true
        })


  conn.sync().then(()=>{
    console.log("Sicronizacao realizada");
    
  }).catch((erro) =>{
    console.log(erro);
    
  })

module.exports = User