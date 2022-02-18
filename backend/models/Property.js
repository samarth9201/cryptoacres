import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  location: {
    country: String,
    state: String,
    city: String,
    map: { type: "point", coordinates: [longitude, latitude] },
  },
  verified: Boolean,
  brokerId: String, // broker who verified the property or has been assigned
  userId: String, // CURRENT owner userID of the property
  priceByUser: Number,
  propertyType: String, // commercial / residential / land
  salePreference: String, // Sell / Rent 
  Area: Number,//in sq ft
  bhk: Number,
  floor:Number,
  carParking: Number,
  facilities: [String],
  constructionYear: Number,
  propertyImages = [String], //cloud links
  propertyDocuments = [String], //cloud links
  currentBids:[
       {userId: String,
        amount: Number,
        timestamp: Date
       }
    ]
  
});

const Property = mongoose.model("property", propertySchema);

export default Property;
