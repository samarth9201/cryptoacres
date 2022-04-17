import React from "react";
import "../Marketplace/PropertiesForSale/PropertyCard.css";
import Paper from "@mui/material/Paper";
import PropertyCardTitle from "../Marketplace/PropertiesForSale/PropertyCardTitle";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function PropertyCard(props) {
  const navigate = useNavigate();
  const property = props.property;
  const title =
    property.locationDetails.society.toUpperCase() +
    ", " +
    property.locationDetails.locality.toUpperCase() +
    ", " +
    property.locationDetails.city.toUpperCase();
  

  function viewDetailsHandle() {
    console.log(property)
    navigate(`/user-property/${props.contract}/${property.tokenId}`);
  }

  return (
    <>
      <Paper
        elevation={3}
        style={{ paddingBottom: 20 }}
        onClick={viewDetailsHandle}
        className="property-card-paper"
      >
        <img
          src={property.imageUrlList[0]}
          className="property-card-property-img"
          alt="property"
        />
        <PropertyCardTitle title={title} />
        <Grid container spacing={2}>

          <Grid item xs={12}>
          <Typography
              component="h4"
              variant="h6"
              style={{ marginLeft: 30, marginTop: 10, marginBottom: 10 }}
            >
              Status: {property.verificationStatus}
            </Typography>
            <Button
              size="small"
              variant="contained"
              fullwidth
              style={{ display: "flex", marginLeft: "auto", marginRight: "auto", alignContent: "center", backgroundColor: "#013A63" }}
              onClick={viewDetailsHandle}
            >
              View Details
            </Button>
          </Grid>
          
        </Grid>
      </Paper>
    </>
  );
}

export default PropertyCard;
