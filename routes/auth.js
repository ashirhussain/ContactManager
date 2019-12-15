const express=require('express');
const router=express.Router();

//route get api/auth
//des :use to get logged in user
//private

router.get('/',(req,res)=>{
res.send('you got logged in user')});


//route post api/auth
//des :use to authenticate user 
//public

router.post('/',(req,res)=>{
res.send('logged in ')});


module.exports =router;