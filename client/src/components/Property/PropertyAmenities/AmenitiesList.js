import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function AmenitiesList(props) {
  return (
    <Grid item xs={12} md={4}>
      <ul>
        {props.list.map((item, id) => (
          <li key={id}>
            <Typography
              component="h4"
              variant="h6"
              style={{ marginBottom: 10 }}
            >
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </Grid>
  );
}

export default AmenitiesList;
