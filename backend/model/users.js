const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    PublicKey:{
        type: String,
        required: true,
        unique: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    Username:{
        type: String,
        required: true,
        unique: true
    },
    Verified:{
        type: Boolean,
        default: false
    },
    Broker:{
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('user', UserSchema)

module.exports = User