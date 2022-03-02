import React from "react";
import "./PropertyCard.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function numDifferentiation(value) {
  var val = Math.abs(value);
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(2) + " Cr";
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(2) + " Lac";
  }
  return val;
}

function PropertyCard(props) {
  const property = props.property;
  const postedBy =
    "Posted by " + property.owner.firstName + " " + property.owner.lastName;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

  return (
    <div className="property-card">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img
            src={property.imageUrlList[0]}
            className="property-card-img"
            alt="property"
          />
        </Grid>
        <Grid item md={9}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
              }}
            >
              <div className="posted-by">
                <Typography component="h4" variant="h6">
                  {postedBy}
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
              }}
            >
              <div className="property-card-item">
                <Typography component="h4" variant="h6">
                  Selling Price &#x20b9;{" "}
                  {numDifferentiation(parseInt(property.price))}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: "flex" }}>
              <div className="property-card-item">
                <Typography component="h4" variant="h5">
                  {address}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: "flex" }}>
              <div className="property-card-item">
                <Typography component="h4" variant="h6">
                  Posted on {property.postedOn}
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                // className="proceed-to-verification-btn"
                style={{
                  marginTop: 25,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 40,
                  paddingRight: 40,
                  whiteSpace: "nowrap",
                }}
              >
                Proceed to Verification
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PropertyCard;
