require('dotenv').config()

const http = require('http')
const app = require('./src/app')
require('./src/routes/routes_usuario')
const port = process.env.PORTA || 1000
require('./src/config/database')

const server = http.createServer(app)
server.listen(port, ()=>{
    console.log('Calcinha pret');
    console.log("Servidor rodando em: http://localhost:10000");
    
})

// const a = `${pass}`