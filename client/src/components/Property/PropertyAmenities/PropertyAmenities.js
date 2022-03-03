import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AmenitiesList from "./AmenitiesList";

function PropertyAmenities(props) {
  const propertyAmenities = props.property.propertyAmenities;
  return (
    <Paper style={{ padding: 20, margin: 20 }} elevation={3}>
      <Typography
        component="h4"
        variant="h5"
        style={{ color: "#524C4C", marginBottom: 20 }}
      >
        Property Amenities & Perks
      </Typography>

      <Grid container spacing={2}>
        <AmenitiesList
          list={propertyAmenities.slice(0, propertyAmenities.length / 3)}
        />
        <AmenitiesList
          list={propertyAmenities.slice(
            propertyAmenities.length / 3,
            propertyAmenities.length * (2 / 3)
          )}
        />
        <AmenitiesList
          list={propertyAmenities.slice(
            propertyAmenities.length * (2 / 3),
            propertyAmenities.length
          )}
        />
      </Grid>
    </Paper>
  );
}

export default PropertyAmenities;
