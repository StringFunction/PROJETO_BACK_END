const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const {USUARIO, SENHA , HOST, PORTA_BANCO, BANCO} = process.env


// const conn =  new Sequelize('postgresql://'+USUARIO+':'+SENHA+'@'+HOST+':'+PORTA_BANCO+'/'+BANCO)
const conn =  new Sequelize('postgresql://postgres.oqvchlisqufitmeojwnd:' + 'Franciscocleciolimasilva' + '@aws-0-us-west-1.pooler.supabase.com:6543/postgres'
)

// console.log('postgresql://'+USUARIO+':'+SENHA+'@'+HOST+':'+PORTA_BANCO+'/'+BANCO);

conn.authenticate().then(() => {
    console.log('Conexao com banco de Dados Estabelecida');
}).catch(erro => console.log(erro))

module.exports = conn