const express = require('express')

const app = express()

const router = require('./userroutes')

app.use('/users',router)

const PORT = 3000


app.listen(PORT,(error)=>{
    if(!error){
        console.log("Running on port"+ PORT)
    }
    else{
        console.log("Error Occured",error)
    }
})