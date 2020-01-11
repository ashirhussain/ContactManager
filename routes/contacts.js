const express=require('express');
const router=express.Router();
const {check,validationResult}=require('express-validator');
const auth=require('../middleware/auth');

const User =require('../models/User');
const Contact =require('../models/Contact');


//route  get api/contacts
//des use to get contacts for current user
//private

router.get('/',auth, async (req,res)=>{
try {
    const contacts=await Contact.find({user:req.user.id}).sort({date:-1});
    res.json(contacts);
} catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
}
// res.send('contacts recived');
});



//route  post api/contacts
//des use to add new conact for current user
//private

router.post('/',[auth,[
    check('name','name is required').not().isEmpty()
]],async (req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {name,email,phone,type}=req.body;
try {
    const newcontact=new Contact({
name,
email,
phone,
type,
user:req.user.id}
    );
    const contact=await newcontact.save();
    res.json(contact);
    
} catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
    
}


});

//route  put api/contacts
//des use to update contacts for current user
//private

router.put('/:id',auth,async(req,res)=>{    
//destructuring values
const {name,email,phone,type}=req.body;

//making object for sending to database
const contact={};

if(name) contact.name=name;
if(email) contact.email=email;
if(phone) contact.phone=phone;
if(type) contact.type=type;
try {
    let contactitem=await Contact.findById(req.params.id);
    if(!contactitem){return res.status(404).json({msg:"contact doesnt exist"});}
contactitem=await  Contact.findByIdAndUpdate(req.params.id,{$set:contact},{new:true});
res.json(contactitem)
} catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
}


});


//route  dele api/contacts
//des use to delete contacts for current user
//private

router.delete('/:id',async(req,res)=>{
try {

let contact=await Contact.findById(req.params.id);
if(!contact) return res.status(404).json({msg:"contact dosent exist"});

    await Contact.findByIdAndRemove(req.params.id);
    res.json({msg:"contact removed"});

    
} catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
}

});


module.exports =router;