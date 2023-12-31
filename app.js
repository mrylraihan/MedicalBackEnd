const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()

const PORT = 4000

app.use(express.urlencoded({extended:true}))//pull data from the front end 
app.use(express.json())//sending back json data
app.use(cors())

mongoose.connect('mongodb://localhost/ktracker_db')

const doctorsControllers = require('./routers/doctor_controller')
const patientControllers = require('./routers/patient_controller')

app.use('/doctors', doctorsControllers )
app.use('/patients', patientControllers)

app.get('/', (req,res)=>{
        res.json({message:"im working!"})
})

const listener = ()=>console.log(`listening to those fire beats on port ${PORT}`)

app.listen(PORT, listener)