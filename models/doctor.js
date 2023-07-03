const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({

    userName:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        required:true
    }
},{
    timestamps:true
})

const Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = Doctor