const express = require('express')

const app = express();

const PORT = 3001

app.use(express.json())

app.post('/',(req,res) =>{
    const {name} = req.body;
    res.send(`Welcome ${name}`)
})


app.listen(PORT,(error)=>{
    if(!error){
        console.log("Running on port"+ PORT)
    }
    else{
        console.log("Error Occured",error)
    }
})