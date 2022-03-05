import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./PropertyDetails.css";
import numDifferentiation from "../../../utils/NumDifferentiation";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import VerifiedIcon from "@mui/icons-material/Verified";
import Tooltip from "@mui/material/Tooltip";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Divider from "@mui/material/Divider";
import RemainingTime from "./RemainingTime";

function PropertyDetails(props) {
  const property = props.property;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

  const endOfSale = "Sale ends March 7, 2022 at 12:55pm IST";

  return (
    <Paper
      style={{ padding: 20, marginRight: 20, marginLeft: 20 }}
      elevation={3}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography component="h4" variant="h4">
            {address.toUpperCase()}{" "}
            <Tooltip title="Verified Property">
              <VerifiedIcon
                fontSize="small"
                style={{ color: "rgb(32, 129, 226)" }}
              />
            </Tooltip>
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <div className="property-details-div">
            <Typography
              component="h4"
              variant="body1"
              style={{ color: "#524C4C", marginBottom: 20 }}
            >
              Owned by{" "}
              {property.owner.firstName + " " + property.owner.lastName}
            </Typography>

            <Divider />

            <Typography
              component="h4"
              variant="h6"
              style={{ color: "#524C4C", marginTop: 20 }}
            >
              {endOfSale}
            </Typography>

            <RemainingTime />

            <Divider />

            <Typography
              component="h4"
              variant="h6"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              Selling price
            </Typography>
            <Typography component="h4" variant="h4">
              &#x20b9; {numDifferentiation(parseInt(property.price))}
            </Typography>

            <Button
              variant="contained"
              style={{ marginTop: 20, paddingTop: 10, paddingBottom: 10 }}
              fullWidth
            >
              <AccountBalanceWalletIcon style={{ paddingRight: 10 }} /> Place
              Bid
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PropertyDetails;
