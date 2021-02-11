const express = require('express')

const app = express()

app.get('localhost:4000',(req,res)=>{

    res.send("this is working properly")
})