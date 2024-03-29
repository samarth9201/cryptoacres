import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function PropertyDescriptionItem(props) {
  return (
    <Grid item xs={6} md={3}>
      {" "}
      <Typography
        component="h4"
        variant="h6"
        style={{
          color: "#524C4C",
          marginBottom: 10,
          fontFamily: "Montserrat",
          color: "#0d6efd",
          fontSize: 20,
        }}
      >
        {props.itemLabel}
      </Typography>
      <Typography
        component="h4"
        variant="h5"
        style={{
          marginBottom: 10,
          fontFamily: "Montserrat",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        {props.itemValue}
      </Typography>
    </Grid>
  );
}

export default PropertyDescriptionItem;
