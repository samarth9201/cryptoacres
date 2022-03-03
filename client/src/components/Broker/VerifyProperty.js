import React from "react";
import Grid from "@mui/material/Grid";
import ImageCarousel from "../Property/ImageCarousel/ImageCarousel";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import PropertyDescription from "../Property/PropertyDescription/PropertyDescription";

//Send a req to backend to get the
//property to be verified
const property = {
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

function VerifyProperty() {
  return (
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ImageCarousel imageUrlList={property.imageUrlList} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PropertyDetails property={property} />
      </Grid>
      <Grid item xs={12} md={12}>
        <PropertyDescription property={property} />
      </Grid>
      <Grid item xs={12} md={12}>
        {/* Property Amenities */}
      </Grid>
    </Grid>
  );
}

export default VerifyProperty;
