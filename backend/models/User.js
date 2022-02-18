import mongoose from "mongoose";
import "mongoose-type-email";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: mongoose.SchemaTypes.Email,
  contactNumber: String, //efficient datatype required
  kycDone: Boolean,
  gender: String,
  dateOfBirth: String,
  password: String, //
  propertiesOwned: [String], //saves array of unique propertyIds
});

const User = mongoose.model("user", userSchema);

export default User;
