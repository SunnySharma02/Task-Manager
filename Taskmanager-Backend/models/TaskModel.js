const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    isComplete:{type:Boolean, default:false}
})

const TaskModel = mongoose.model("Task", taskSchema)

module.exports= TaskModel