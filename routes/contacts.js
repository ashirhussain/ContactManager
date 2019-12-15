const express=require('express');
const router=express.Router();

//route  get api/contacts
//des use to get contacts for current user
//private

router.get('/',(req,res)=>{
res.send('provides contacts')
});



//route  post api/contacts
//des use to add new conact for current user
//private

router.post('/',(req,res)=>{
res.send('contact added')
});

//route  put api/contacts
//des use to update contacts for current user
//private

router.put('/:id',(req,res)=>{
res.send('contact updated')
});


//route  dele api/contacts
//des use to delete contacts for current user
//private

router.delete('/:id',(req,res)=>{
res.send('contact deleted')
});


module.exports =router;