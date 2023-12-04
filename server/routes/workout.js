const express = require('express');
const router = express.Router()
const Workout = require('../models/workoutModule')
const {
    getWorkout,
    getAllWorkouts,
    createWorkout

} = require('../controllers/workoutController')

router.get('/workouts',getAllWorkouts)

router.get('/workouts/:id',getWorkout)

router.post('/workouts', createWorkout);

router.delete('/workouts/:id',(req,res)=>{
    res.json({msg:"Delete a workout :("})
})

router.patch('/workouts/:id',(req,res)=>{
    res.json({msg:"Update a workout!"})
})

module.exports=router