const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    medicalRecordNumber: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    horizontalDimensions: {
        type: String,
        required: true
    },
    verticalDimensions: {
        type: String,
        required: true
    },
    doctorBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    }
}, {
    timestamps: true
})

const Patient = mongoose.model('Patient', patientSchema)
module.exports = Patient
