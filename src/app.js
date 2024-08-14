const express = require('express')
const app = express()



app.get('/ola', (req,res) => {
    res.send('ola mundo')
})




module.exports =  app