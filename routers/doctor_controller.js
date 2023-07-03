const express = require('express')
const router = express.Router()

const Doctor = require('../models/doctor')

router.get('/', (req, res) => {
    Doctor.find()
        .then(doctor => res.status(200).json(doctor))
        .catch(err => res.json(err))
})
router.post('', (req, res) => {
    const doctor = req.body
    Doctor.create(doctor)
        .then(newDoctor => {
            res.status(201).json(newDoctor)
        })
        .catch(err => res.json(err))
})

module.exports = router