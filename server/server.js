require('dotenv').config()
const express = require('express');
const app=express()
const port=process.env.PORT || 8080
const workoutRoute=require('./routes/workout')
const mongoose=require('mongoose')

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api',workoutRoute);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Connected to DB && Server started on ${port}...`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
