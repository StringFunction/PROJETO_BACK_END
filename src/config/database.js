const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const {USUARIO, SENHA , HOST, PORTA_BANCO, BANCO} = process.env
const pass = encodeURIComponent(SENHA)
console.log('postgresql://'+USUARIO+':'+SENHA+'@'+HOST+':'+PORTA_BANCO+'/'+BANCO);

const conn =  new Sequelize('postgresql://'+USUARIO+':'+pass+'@'+HOST+':'+PORTA_BANCO+'/'+BANCO,{
    dialect: 'postgres',
    dialectOptions: {
      connectTimeout: 60000 // 60 segundos
    }
})


conn.authenticate().then(() => {
    console.log('Conexao com banco de Dados Estabelecida');
}).catch(erro => console.log(erro))

module.exports = conn