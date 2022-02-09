import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    contactNumber: String,
    kycDone: Boolean,
    gender: String,
    dateOfBirth: String,
    password: String,
    propertiesOwned: [Number]
});

const User = mongoose.model('user', userSchema);

export default User;