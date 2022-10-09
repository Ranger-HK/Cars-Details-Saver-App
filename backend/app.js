
const express=require('express');
const mongoose = require('mongoose');

const user = require('./routes/user')
const vehicle =require('./routes/Vehicle')

const app=express();
const port=4000;



const url='mongodb://127.0.0.1/express';
mongoose.connect(url,{useNewUrlParser:true});

const con =mongoose.connection;

con.on("open",()=>{
    console.log("mongodb connected");
});

app.use(express.json());
app.use('/user', user)
app.use('/vehicle',vehicle)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})