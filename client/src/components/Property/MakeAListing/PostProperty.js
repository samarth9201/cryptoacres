import React from "react";
import { makeAListing } from "../../../service/propertyAPI";
import Button from "@mui/material/Button";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Grid from "@mui/material/Grid";
import PropertyDescription from "../PropertyDescription/PropertyDescription";
import PropertyAmenities from "../PropertyAmenities/PropertyAmenities";
import Paper from "@mui/material/Paper";
import VerifiedIcon from "@mui/icons-material/Verified";
import Tooltip from "@mui/material/Tooltip";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

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
    city: "Mumbai",
    locality: "Andheri",
    society: "Blue Heaven",
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

function PostProperty(props) {
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;
  const PostProperty = async () => {
    try {
      if (props.signer === null) {
        alert("Please Connect to MetaMask");
      } else {
        var price = props.property.price;
        var prop = props.property;
        delete prop.price;
        makeAListing(prop, price, props.signer);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      {property === null ? (
        <></>
      ) : (
        <>
          {" "}
          <Grid item xs={12} md={6}>
            <ImageCarousel imageUrlList={property.imageUrlList} />
          </Grid>
          <Grid item xs={12} md={6}>
          <Paper
      style={{ padding: 20, marginRight: 20, marginLeft: 20 }}
      elevation={3}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography component="h4" variant="h4">
            {address.toUpperCase()}{" "}
            <Tooltip title="Verified Property">
              <VerifiedIcon
                fontSize="small"
                style={{ color: "rgb(32, 129, 226)" }}
              />
            </Tooltip>
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <div className="property-details-div">
           
           
            
            <Button
              variant="contained"
              style={{ paddingTop: 10, paddingBottom: 10 }}
              fullWidth
              onClick={PostProperty}
            >
              <AccountBalanceWalletIcon style={{ paddingRight: 10 }} />
              Confirm and Post
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
            
          </Grid>
          <Grid item xs={12} md={12}>
            <PropertyDescription property={property} />
          </Grid>
          <Grid item xs={12} md={12}>
            <PropertyAmenities property={property} />
          </Grid>
        </>
      )}
    </Grid>
    </>
  );
}

export default PostProperty;
