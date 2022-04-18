const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
    PublicKey:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    OTP:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const OTP = mongoose.model('otp', OTPSchema)

module.exports = OTP