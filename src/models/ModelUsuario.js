const { DataTypes } = require("sequelize");
const crip = require("bcrypt")
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
    hooks : {
      beforeSave : async (user) =>{
        if (user.changed("password")) {
          const count =  10
          user.password = await crip.hash(user.password, count)
          
        }

      }
    }
        })


  conn.sync().then(()=>{
    console.log("Sicronizacao  model usuario realizada");
    
  }).catch((erro) =>{
    console.log(erro);
    
  })

module.exports = User