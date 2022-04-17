import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./PropertyDetails.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { API } from "../../../constants";
import axios from "axios";

function PropertyDetails(props) {
  const [user, setUser] = React.useState(null)
  const property = props.property;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

    const [issues, setIssues] = useState("");

    React.useEffect(async () =>{
      var user = await axios.post(`${API}/api/users`, {"PublicKey": property.data.owner})
      setUser(user.data.user)
    }, [])

    function handleApprove() {
      
    }
    
    function handleReject() {

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
              Posted by{" "}
              {(user === null) ? property.data.owner : user.Username}
            </Typography>
            <Typography
              component="h4"
              variant="h6"
              style={{ marginBottom: 10 }}
            >
              Selling price
            </Typography>
            <Typography component="h4" variant="h4">
              {/* &#x20b9;  */}
              {property.data.price.toString()}{" "}ETH
            </Typography>
            
            <Grid container spacing={2}>

            <Grid item xs={6}>
            <Button variant="contained" style={{ marginTop: 20 }} fullWidth onClick={handleApprove}>
              Approve Listing
            </Button>
            </Grid>
            
            <Grid item xs={6}>
            <Button variant="contained" style={{ marginTop: 20, backgroundColor: "red" }} fullWidth onClick={handleReject}>
              Reject Listing
            </Button>
            </Grid>
            
            </Grid>

          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="issues"
            label="Issues Detected"
            name="issues"
            onChange={(event) => {setIssues(event.target.value)}}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PropertyDetails;
