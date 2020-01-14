const express=require('express');
const connectDB=require('./config/db');
const app=express();


//conection to database
connectDB();
//init middleware
app.use(express.json({extended:false}));



app.get('/',(req,res)=>
res.json({msg:"server is responding on / request"}));


app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));


const PORT=process.env.port||443;

app.listen(PORT,()=>console.log(`sever started at port ${PORT}`));



