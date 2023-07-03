const express = require('express')
const router = express.Router()

const Patient = require('../models/patient')

router.get('/', (req,res)=>{
    Patient.find()
    .populate('doctorBy')
    .then(patients=>res.status(200).json(patients))
    .catch(err=>res.json(err))
})
router.get('/doctors/:id', (req,res)=>{
    const docId = req.params.id
    Patient.find({doctorBy :docId})
    .then(patients=>res.status(200).json(patients))
    .catch(err=>res.json(err))
})
router.post('', (req,res)=>{
    const patient = req.body
    Patient.create(patient)
    .then(newPatient=>{
        res.status(201).json(newPatient)
    })
    .catch(err=>res.json(err))
})



module.exports = router