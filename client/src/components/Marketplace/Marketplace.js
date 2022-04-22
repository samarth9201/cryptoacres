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
      <PropertiesForSale />
    </>
  );
}

export default Marketplace;
