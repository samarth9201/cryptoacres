import mongoose from "mongoose";

// const propertySchema = mongoose.Schema({
//   location: {
//     country: String,
//     state: String,
//     city: String,
//     map: { type: "point", coordinates: [longitude, latitude] },
//   },
//   verified: Boolean,
//   brokerId: String, // broker who verified the property or has been assigned
//   userId: String, // CURRENT owner userID of the property
//   priceByUser: Number,
//   propertyType: String, // commercial / residential / land
//   salePreference: String, // Sell / Rent
//   Area: Number,//in sq ft
//   bhk: Number,
//   floor:Number,
//   carParking: Number,
//   facilities: [String],
//   constructionYear: Number,
//   propertyImages = [String], //cloud links
//   propertyDocuments = [String], //cloud links
//   currentBids:[
//        {userId: String,
//         amount: Number,
//         timestamp: Date
//        }
//     ]

// });

const propertySchema = mongoose.Schema({
  imageUrlList: [String],
  length: [String],
  locationDetails: {
    city: String,
    locality: String,
    society: String,
  },
  ownership: String, //can we store owner schema here?
  price: String,
  pricePerUnitArea: String,
  propertyAmenities: [String],
  propertyProfile: {
    ageOfProperty: Number,
    areaUnit: String,
    availabilityStatus: String,
    balconies: String,
    bathrooms: String,
    bedrooms: String,
    builtUpArea: String,
    carpetArea: String,
    expectedMonth: String,
    expectedYear: String,
    furnishing: String,
    parking: String,
  },
  propertyType: String,
  propertyTypeTwo: String,
});

const Property = mongoose.model("property", propertySchema);

export default Property;
