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
import axios from "axios";
import { API } from "../../../constants";
import web3 from "web3";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import NFTMarketplace from "../../../contracts/NFTMarketplace.json";

function PropertyDetails(props) {
  const { contract, id } = useParams();
  const [user, setUser] = React.useState(null);
  const [price, setPrice] = React.useState("NA");
  const property = props.property;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

  async function handleBuyNow() {
    var nftContract = new ethers.Contract(
      contract,
      NFTMarketplace.abi,
      props.signer
    );
    var a;
    if(price !== "NA"){
      a = await web3.utils.toWei(price, "ether")
    }
    const tx = await nftContract.createMarketSale(id, {value: a});
    const receipt = await tx.wait();

    alert("Transaction Successful: " + receipt.transactionHash);
    console.log(props.signer);
  }

  React.useEffect(async () => {
    var user = await axios.post(`${API}/api/users`, {
      PublicKey: property.data.seller,
    });
    console.log("Prop");
    console.log(property);
    var p = await web3.utils.fromWei(property.data.price.toString());
    setUser(user.data.user);
    setPrice(p);
  }, []);

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
              Sold by {user === null ? property.data.owner : user.Username}
            </Typography>

            <Divider />

            <Typography
              component="h4"
              variant="h6"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              Selling price
            </Typography>
            <Typography component="h4" variant="h4">
              {/* &#x20b9;  */}
              {price} ETH
            </Typography>

            <Button
              variant="contained"
              style={{ marginTop: 20, paddingTop: 10, paddingBottom: 10 }}
              fullWidth
              onClick={handleBuyNow}
            >
              <AccountBalanceWalletIcon style={{ paddingRight: 10 }} />
              Buy Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PropertyDetails;
