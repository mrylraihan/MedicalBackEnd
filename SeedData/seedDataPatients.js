const mongoose = require('mongoose')
const Patient = require('../models/patient')

mongoose.connect('mongodb://localhost/ktracker_db')

const patientsList = [
   {
    firstName:"Mike",
    lastName: "Johnson",
    dateOfBirth: "10-10-1989",
    medicalRecordNumber: 123324321432,
    location: "Clinic",
    horizontalDimensions: "2.11mm",
    verticalDimensions: "2.11mm",
        doctorBy: "64a33eee7037d73bdefc6cb4"
   },
   {
    firstName:"Rowen",
    lastName: "Taylor",
    dateOfBirth: "02-20-1989",
    medicalRecordNumber: 12324321432,
    location: "Clinic",
    horizontalDimensions: "3.41mm",
    verticalDimensions: "5.61mm",
       doctorBy: "64a33eee7037d73bdefc6cb4"
   },
   {
    firstName:"Jason",
    lastName: "Smith",
    dateOfBirth: "07-04-1994",
    medicalRecordNumber: 12324321432,
    location: "Lab",
    horizontalDimensions: "2.41mm",
    verticalDimensions: "1.61mm",
       doctorBy: "64a33eee7037d73bdefc6cb4"
   },
   {
    firstName:"Billy",
    lastName: "Smith",
    dateOfBirth: "07-04-1994",
    medicalRecordNumber: 12324321432,
    location: "Lab",
    horizontalDimensions: "2.41mm",
    verticalDimensions: "1.61mm",
       doctorBy: "64a33eee7037d73bdefc6cb5"
   },
   {
    firstName:"Burgur",
    lastName: "Ragavandufjlkajflksdj",
    dateOfBirth: "07-04-1994",
    medicalRecordNumber: 12324321432,
    location: "Lab",
    horizontalDimensions: "2.41mm",
    verticalDimensions: "1.61mm",
    doctorBy: "64a33eee7037d73bdefc6cb5"
   },
]

const insertSeedData = ()=>{
    Patient.deleteMany({}).then(
        Patient.insertMany(patientsList)
        .then(()=>{
            console.log("Patients data inserted successfully")
            process.exit()
        })
        .catch(console.error)
    )
    .catch(console.error)
}

insertSeedData()