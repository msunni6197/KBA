const express = require('express')

const app = express()

app.use(express.json());

const PORT = 3001

let users = [
    {id:1,name:'jill'},
    {id:2,name:'junk'}
];

app.get('/users',(req,res)=>{
    res.status(200);
    res.json(users)
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex!==-1){
        users[userIndex] = {...users[userIndex],...updateUser};
        res.json(users[userIndex])
    }else{
        res.status(404).json({error:'user not found'})
    }
})
app.delete('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if(userIndex !==-1){
        const deleteUser = users.splice(userIndex,1);
        res.json(deleteUser)
    }else{
        res.status(404).json({error:'user not found'})
    }
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Running on port"+ PORT)
    }
    else{
        console.log("Error Occured",error)
    }
})