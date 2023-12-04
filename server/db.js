require('dotenv').config()
const mongoose=require('mongoose')

mongoose.connext(process.env.MONGO_URI)