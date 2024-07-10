const express = require('express')

const router = express.Router();
router.use(express.json());

let users = [
    {id:1,name:'jill'},
    {id:2,name:'junk'}
];

router.get('/',(req,res)=>{
    res.status(200);
    res.json(users)
})

router.post('/',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})

router.put('/:id',(req,res)=>{
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
router.delete('/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if(userIndex !==-1){
        const deleteUser = users.splice(userIndex,1);
        res.json(deleteUser)
    }else{
        res.status(404).json({error:'user not found'})
    }
})

module.exports = router