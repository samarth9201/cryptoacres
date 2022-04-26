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
    console.log(property);
    navigate(`/user-property/${props.contract}/${property.tokenId}`);
  }

  return (
    <>
      <Paper
        elevation={3}
        onClick={viewDetailsHandle}
        className="property-card-paper"
      >
        <center>
          <img
            src={property.imageUrlList[0]}
            className="property-card-property-img"
            alt="property"
          />
        </center>
        <PropertyCardTitle
          title={title}
          verificationStatus={property.verificationStatus}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            <Button
              fullWidth
              variant="contained"
              style={{
                paddingRight: 10,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                fontFamily: "Montserrat",
              }}
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
