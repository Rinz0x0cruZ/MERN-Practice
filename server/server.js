require('dotenv').config()
const express = require('express');
const app=express()
const port=process.env.PORT || 8080
const workoutRoute=require('./routes/workout')


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api',workoutRoute);

//listen for requests
app.listen(port,()=>{
    console.log(`Server started on ${port}...`)
})