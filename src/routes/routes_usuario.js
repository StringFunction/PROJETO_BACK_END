const app = require('../app')

app.get("/",(req,res) =>{
    res.status(200).send("ola munod")
})