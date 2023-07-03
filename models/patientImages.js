const mongoose = require('mongoose')

const patientImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: String,
    image: {
        data: Buffer,
        contentType: String
    },
    imageBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    }
    // image:String
},
    { timestamps: true })

const PatientImage = mongoose.model('PatientImage', patientImageSchema)
module.exports = PatientImage
