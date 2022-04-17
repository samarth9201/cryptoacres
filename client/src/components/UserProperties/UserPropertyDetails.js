import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../Marketplace/ViewPropertyDetails/PropertyDetails.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import VerifiedIcon from "@mui/icons-material/Verified";
import Tooltip from "@mui/material/Tooltip";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { API } from "../../constants";

function UserPropertyDetails(props) {
  const [user, setUser] = React.useState(null)
  const property = props.property;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

    const [sellingPrice, setSellingPrice] = useState(0);

    function placeForSale() {
        console.log(sellingPrice);
    }

    React.useEffect(async () =>{
      var user = await axios.post(`${API}/api/users`, {"PublicKey": property.data.owner})
      setUser(user.data.user)
    }, [])

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
              {(user === null) ? property.data.owner : user.Username}
            </Typography>

            <TextField
                  required
                  fullWidth
                  id="sellingPrice"
                  label="Selling Price (ETH)"
                  name="sellingPrice"
                  onChange={(event) => {
                      setSellingPrice(event.target.value);
                  }}
            />
            
            <Button
              variant="contained"
              style={{ marginTop: 20, paddingTop: 10, paddingBottom: 10 }}
              fullWidth
              onClick={placeForSale}
            >
              <AccountBalanceWalletIcon style={{ paddingRight: 10 }} />
              Place for sale
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserPropertyDetails;
