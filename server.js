require('dotenv').config()

const http = require('http')
const app = require('./src/app')
const { Sequelize } = require('sequelize')
require('./src/routes/routes_usuario')
const port = process.env.PORTA || 10000
// require('./src/config/database')
// const pass = encodeURIComponent('cL#C$O18218')
// const sequelize = new Sequelize(`postgresql://postgres.gcxggindyigcsszgvylo:${pass}@aws-0-us-west-1.pooler.supabase.com:6543/postgres`)

const server = http.createServer(app)


server.listen(port, ()=>{
    console.log('Calcinha preta \n http://localhost:10000');
})

// const a = `${pass}`