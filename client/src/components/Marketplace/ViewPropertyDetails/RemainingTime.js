import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function RemainingTime() {
  const remDays = 2;
  const remHours = 13;
  const remMinutes = 32;
  const remSeconds = 45;
  return (
    <Grid container style={{ marginBottom: 20 }}>
      <Grid item xs={2}>
        <Typography
          component="h4"
          variant="h5"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          {remDays}
        </Typography>
        <Typography
          component="h4"
          variant="h6"
          style={{ color: "#524C4C", marginTop: 10 }}
        >
          Days
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography
          component="h4"
          variant="h5"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          {remHours}
        </Typography>
        <Typography
          component="h4"
          variant="h6"
          style={{ color: "#524C4C", marginTop: 10 }}
        >
          Hours
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography
          component="h4"
          variant="h5"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          {remMinutes}
        </Typography>
        <Typography
          component="h4"
          variant="h6"
          style={{ color: "#524C4C", marginTop: 10 }}
        >
          Minutes
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography
          component="h4"
          variant="h5"
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {remSeconds}
        </Typography>
        <Typography
          component="h4"
          variant="h6"
          style={{ color: "#524C4C", marginTop: 10 }}
        >
          Seconds
        </Typography>
      </Grid>
    </Grid>
  );
}

export default RemainingTime;
