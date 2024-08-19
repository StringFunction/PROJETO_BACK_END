require('dotenv').config()

const http = require('http')
const app = require('./src/app')
require('./src/routes/EndpointUsuario')
require('./src/routes/EndpointCategoria')
require('./src/routes/EndopointProdutos')
require("./src/models/ModelConfig")
const port = process.env.PORTA || 10000
require('./src/config/database')

const server = http.createServer(app)
server.listen(port, ()=>{
    console.log('Calcinha preta');
    console.log("Servidor rodando em: http://localhost:10000");
    
})

