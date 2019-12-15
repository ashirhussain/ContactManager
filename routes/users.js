const express=require('express');
const router=express.Router();

//route api/users
//des use for user signup
//public

router.post('/',(req,res)=>{
res.send('user registered sucessfully')
});

module.exports =router;