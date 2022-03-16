const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./userRouter')
const PORT = process.env.PORT || 10000

const app = express()
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(express.json())
app.use('/user', userRouter)
const start = async () => {
    try { 
        await mongoose.connect('mongodb+srv://Ti-bon:dZC8nQ1mM4jpXNB2@cluster0.1jiqu.mongodb.net/Camp?retryWrites=true&w=majority')
        app.listen(PORT, ()=> console.log(`server started on port ${PORT}`) )
    }catch(e) {
        console.log(e)
    }
}

start()
