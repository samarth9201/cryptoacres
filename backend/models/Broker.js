import mongoose from "mongoose";
import "mongoose-type-email";

const brokerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  licenceNumber: String,
  contactNumber: String, //efficient datatype required
  email: {
    Personal: mongoose.SchemaTypes.Email,
    WorkCA: mongoose.SchemaTypes.Email,
  },
  password: String, //
  location: {
    country: String,
    state: String,
    city: String,
  },
  approvedProperties: [String], //saves array of unique propertyIds
  //incentives, properties sold?
});

const Broker = mongoose.model("broker", brokerSchema);

export default Broker;
