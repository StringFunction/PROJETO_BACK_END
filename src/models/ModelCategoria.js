const conn = require("../config/database")
const { DataTypes } = require("sequelize");


const Categorias = conn.define("Categorias", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    nome : {
        type : DataTypes.STRING,
        allowNull: false
    },
    slug : {
        type : DataTypes.STRING,
        allowNull: false
    },
    use_in_menu : {
        type : DataTypes.BOOLEAN,
        allowNull :true,
        defaultValue: false
    }

},
{
    timestamps: true
})
conn.sync().then(()=>{
    console.log("Sicronizao model Categorias realizada");
    
}).catch((erro) =>{
    console.log(erro);
    
})

module.exports = Categorias