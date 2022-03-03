import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./PropertyDetails.css";
import numDifferentiation from "../../../utils/NumDifferentiation";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function PropertyDetails(props) {
  const property = props.property;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;
  return (
    <Paper
      style={{ padding: 20, marginRight: 20, marginLeft: 20 }}
      elevation={3}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography component="h4" variant="h4">
            {address.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className="property-details-div">
            <Typography
              component="h4"
              variant="h5"
              style={{ color: "#524C4C", marginBottom: 10 }}
            >
              Posted by{" "}
              {property.owner.firstName + " " + property.owner.lastName} on{" "}
              {property.postedOn}
            </Typography>
            <Typography
              component="h4"
              variant="h6"
              style={{ marginBottom: 10 }}
            >
              Selling price
            </Typography>
            <Typography component="h4" variant="h4">
              &#x20b9; {numDifferentiation(parseInt(property.price))}
            </Typography>
            <Button variant="contained" style={{ marginTop: 20 }} fullWidth>
              Verify Now
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography component="h4" variant="h6" style={{ marginBottom: 10 }}>
            Issues Detected ???
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PropertyDetails;
