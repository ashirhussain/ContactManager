const express=require('express');
const app=express();

app.get('/',(req,res)=>
res.json({msg:"server is responding on / request"}));


app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));


const PORT=process.env.port||5000;

app.listen(PORT,()=>console.log(`sever started at port ${PORT}`));



