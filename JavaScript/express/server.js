const express = require('express')

const app = express();

const PORT = 3000

app.get('/',(req,res) =>{
    res.status(200)
    res.send("WELCOME")
})

app.get('/unni',(req,res) =>{
    res.status(200)
    res.send("U R AWESOME")
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Running on port"+ PORT)
    }
    else{
        console.log("Error Occured",error)
    }
})