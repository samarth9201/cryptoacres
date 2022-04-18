import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./PropertyDetails.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { API } from "../../../constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import NFTMarketplace from "../../../contracts/NFTMarketplace.json";

function PropertyDetails(props) {
  const [user, setUser] = React.useState(null);
  const { contract, id } = useParams();
  const property = props.property;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

  const [issues, setIssues] = useState("");
  const [price, setPrice] = useState("");
  const [pricePSF, setPricePSF] = useState("");

  React.useEffect(async () => {
    var user = await axios.post(`${API}/api/users`, {
      PublicKey: property.data.owner,
    });
    setUser(user.data.user);
  }, []);

  async function handleApprove() {
    console.log(issues, price, pricePSF);
    console.log(contract);
    console.log(id);
    console.log(props.signer);

    var nftContract = new ethers.Contract(
      contract,
      NFTMarketplace.abi,
      props.signer
    );
    const tx = await nftContract.verifyToken(id, price, pricePSF);
    const receipt = await tx.wait();

    alert("Transaction Successful: " + receipt.transactionHash);
  }

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
              Posted by {user === null ? property.data.owner : user.Username}
            </Typography>
            <Typography
              component="h4"
              variant="h6"
              style={{ marginBottom: 10 }}
            >
              Property Valuation
            </Typography>

            <TextField
              fullWidth
              id="price"
              label="Price"
              name="price"
              style={{ marginTop: 10 }}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="pricePSF"
              label="Price / sq. ft."
              name="pricePSF"
              style={{ marginTop: 20 }}
              onChange={(event) => {
                setPricePSF(event.target.value);
              }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  style={{ marginTop: 20 }}
                  fullWidth
                  onClick={handleApprove}
                >
                  Approve Listing
                </Button>
              </Grid>

              {/* <Grid item xs={6}>
            <Button variant="contained" style={{ marginTop: 20, backgroundColor: "red" }} fullWidth onClick={handleReject}>
              Reject Listing
            </Button>
            </Grid> */}
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="issues"
            label="Issues Detected"
            name="issues"
            onChange={(event) => {
              setIssues(event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PropertyDetails;
