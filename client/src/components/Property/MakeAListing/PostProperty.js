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


function PostProperty(props) {
  const property = props.property
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
