const mongoose = require('mongoose')
const Doctor = require('../models/doctor')

mongoose.connect('mongodb://localhost/ktracker_db')

const doctorsList = [
    {
        userName:'moe-money',
        password:'moe-money',
        admin:false
    },
    {
        userName:'esma223',
        password:'password',
        admin:false
    },
    {
        userName:'admin',
        password:'123',
        admin:true
    },
]

const insertSeedData = ()=>{
    Doctor.deleteMany({})
    .then(
        Doctor.insertMany(doctorsList)
        .then(()=>{
            console.log("Doctor data inserted successfully")
            process.exit()
        })
        .catch(console.error)
    )
    .catch(console.error)
}

insertSeedData()