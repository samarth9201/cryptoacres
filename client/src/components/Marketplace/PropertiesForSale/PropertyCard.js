import React from "react";
import "./PropertyCard.css";
import Paper from "@mui/material/Paper";
import PropertyCardTitle from "./PropertyCardTitle";
import Typography from "@mui/material/Typography";
import numDifferentiation from "../../../utils/NumDifferentiation";
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
  const price = "₹ " + numDifferentiation(parseInt(property.price));

  function viewDetailsHandle() {
    navigate("/view-property-details/" + property.propertyId);
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
          <Grid item xs={6}>
            <Typography
              component="h4"
              variant="body2"
              style={{ marginLeft: 30 }}
            >
              Price
            </Typography>
            <Typography
              component="h4"
              variant="body1"
              style={{ marginLeft: 30 }}
            >
              {price}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: 50 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <TimelapseIcon style={{ color: "rgb(112, 122, 131)" }} />
              <span>6 days left</span>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="small"
              variant="contained"
              style={{ marginLeft: 30, backgroundColor: "#013A63" }}
              onClick={viewDetailsHandle}
            >
              View Details
            </Button>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: 50 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <FavoriteBorderIcon style={{ color: "rgb(235, 87, 87)" }} />
              <span>10</span>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default PropertyCard;
