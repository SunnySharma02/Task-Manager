require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const taskAPI = require('./APIs/Task')
const cors = require('cors')
const path = require('path')


const app = express()

app.use(express.json())

app.use(express.urlencoded())
app.use(cors())
app.use(express.static(path.resolve(process.env.PUBLIC_DIR)))

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Database Connected')
}

main().catch(err => console.log(err))


app.use(taskAPI)

app.listen(process.env.PORT, ()=>{
    console.log('Server Started')
})