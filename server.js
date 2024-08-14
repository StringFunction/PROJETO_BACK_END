require('dotenv').config()

const http = require('http')
const app = require('./src/app')
const port = process.env.PORTA || 10000
require('./src/config/database')



const server = http.createServer(app)


server.listen(port, ()=>{
    console.log('Calcinha preta ');
})