const express = require('express');
const router=express.Router()

router.get('/workouts',(req,res)=>{
    res.json({msg:"Give all the workouts"})
})
router.get('/workouts/:id',(req,res)=>{
    res.json({msg:`Get a workout for ${req.ip}`})
})
router.post('/workouts/',(req,res)=>{
    res.json({msg:"Post a workout!"})
})
router.delete('/workouts/:id',(req,res)=>{
    res.json({msg:"Delete a workout :("})
})
router.patch('/workouts/:id',(req,res)=>{
    res.json({msg:"Update a workout!"})
})

module.exports=router