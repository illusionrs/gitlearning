const express = require('express')

const app = express()

app.get('localhost:4000',(req,res)=>{

    var a = req.body
    res.send("this is updated properly")

})