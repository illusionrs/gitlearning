const express = require('express')

const app = express()

app.post('localhost:4000',(req,res)=>{

    res.send("this ")
})