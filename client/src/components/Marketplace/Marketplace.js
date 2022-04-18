import React from "react";
import "./Marketplace.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import PropertyFilter from "./PropertyFilter";
import PropertiesForSale from "./PropertiesForSale/PropertiesForSale";
import ActivityLog from "./ActivityLog";

function Marketplace() {
  return (
    <>
      {/* <div className="search-bar-div">
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          fullWidth
          style={{ maxWidth: "65%" }}
        />
      </div> */}

      <Grid container spacing={2} style={{ marginTop: 40 }}>
        {/* <Grid item xs={12} md={2} style={{ backgroundColor: "yellow" }}>
          <PropertyFilter />
        </Grid> */}
        <Grid>
          <PropertiesForSale />
        </Grid>
        {/* <Grid item xs={12} md={2} style={{ backgroundColor: "blue" }}>
          <ActivityLog />
        </Grid> */}
      </Grid>
    </>
  );
}

export default Marketplace;
