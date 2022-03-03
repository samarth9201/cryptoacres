import React from "react";
import "./BrokerDashboard.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const myProperty = {
  propertyId: "1234",
  owner: {
    ownerId: "123",
    firstName: "Maurvin",
    lastName: "Shah",
  },
  postedOn: "February 2, 2022",
  imageUrlList: [
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124489/jbgklxyxhbmpfrn9hlz6.jpg",
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124495/hw476ilyyinjuzfqyuom.jpg",
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124501/e4kzadb8ikevh9nidn8m.jpg",
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124506/h4c3ck8aqpqcbdkl8vk2.jpg",
  ],
  locationDetails: {
    city: "Pune",
    locality: "Shivaji Nagar",
    society: "Paradise Apartment",
  },
  ownership: "Freehold",
  price: "6000000",
  pricePerUnitArea: "7059",
  propertyAmenities: [
    "Lift",
    "Water Storage",
    "Security Guard",
    "False Ceiling Lighting",
    "Water purifier",
    "Recently Renovated",
    "Natural Light",
    "Well Ventilated",
    "Spacious Interiors",
    "Municipal corporation",
    "Borewell / Tank",
    "Close to School",
    "Close to Market",
    "Close to Hospital",
  ],
  propertyProfile: {
    ageOfProperty: "5",
    areaUnit: "sq.ft.",
    availabilityStatus: "ready to move",
    balconies: "1",
    bathrooms: "2",
    bedrooms: "2",
    builtUpArea: "900",
    carpetArea: "850",
    expectedMonth: "January",
    expectedYear: 2022,
    furnishing: "unfurnished",
    parking: "open parking",
  },
  propertyType: "residential",
  propertyTypeTwo: "Apartment",
};

//Send a req to backend to get all the
//properties to be verified
const propertiesToVerify = [myProperty, myProperty, myProperty];
const title =
  "You have " + propertiesToVerify.length + " new properties to verify";

function BrokerDashboard() {
  return (
    <>
      <Title title={title} />
      <Typography component="h3" variant="h5" style={{ marginLeft: 30 }}>
        Property Listings
      </Typography>

      <Paper style={{ padding: 20, margin: 20 }} elevation={3}>
        {propertiesToVerify.map((property) => {
          return <PropertyCard property={property} />;
        })}
      </Paper>
    </>
  );
}

export default BrokerDashboard;
