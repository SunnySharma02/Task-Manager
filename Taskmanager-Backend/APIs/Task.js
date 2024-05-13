const express = require('express')
const TaskModel = require('../models/TaskModel')
const router = express.Router()

router.get('/tasks', async (req, res)=> {
    try {
        const tasks = await TaskModel.find()
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error Occurred'})
    }
})

router.post('/task/new', async (req, res)=> {
    try {
        const title = req.body
        const newTask = await TaskModel.create(title)
        res.status(200).json(newTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error Occurred'})
    }
})

router.patch('/tasks/:taskId/edit', async (req, res)=> {
    try {
        const {taskId} = req.params
        const {isComplete} = req.body
        const updatedTask = await TaskModel.findByIdAndUpdate(taskId, {isComplete})
        res.status(201).json(updatedTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error Occurred'})
    }
})

router.delete('/tasks/:taskId/delete', async (req, res)=> {
    try {
        const {taskId} = req.params
        const deletedTask = await TaskModel.findByIdAndDelete(taskId)
        res.status(201).json(deletedTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error Occurred'})
    }
})

module.exports = router