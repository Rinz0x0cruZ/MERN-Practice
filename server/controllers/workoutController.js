const Workout=require('../models/workoutModule')
const mongoos=require('mongoose')
//get all workouts
const getAllWorkouts= async (req,res) =>{
    const workouts=await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}
//get single workout
const getWorkout = async (req,res)=>{
    const { id } = req.params
    
    if(!mongoos.Types.ObjectId.isValid(id)) 
        return res.status(400).json({error:"ID not found"})

    const workout=await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout)
}


//create a workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//update a workout

//delete a workout

module.exports = {
    getWorkout,
    getAllWorkouts,
    createWorkout
}