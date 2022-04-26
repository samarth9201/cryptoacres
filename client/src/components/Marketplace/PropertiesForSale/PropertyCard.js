import React from "react";
import "./PropertyCard.css";
import Paper from "@mui/material/Paper";
import PropertyCardTitle from "./PropertyCardTitle";
import Typography from "@mui/material/Typography";
import numDifferentiation from "../../../utils/NumDifferentiation";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import web3 from "web3";

function PropertyCard(props) {
  const navigate = useNavigate();
  const [price, setPrice] = React.useState(0);
  const property = props.property;
  const title =
    property.locationDetails.society.toUpperCase() +
    ", " +
    property.locationDetails.locality.toUpperCase() +
    ", " +
    property.locationDetails.city.toUpperCase();

  function viewDetailsHandle() {
    navigate(
      `/view-property-details/${property.address}/${property.data.tokenId}`
    );
  }

  React.useEffect(async () => {
    var a = await web3.utils.fromWei(property.data.price.toString(), "ether");
    setPrice(a);
  }, []);

  return (
    <>
      <Paper
        elevation={3}
        onClick={viewDetailsHandle}
        className="property-card-paper"
      >
        <center>
          <img
            src={property.imageUrlList[0]}
            className="property-card-property-img"
            alt="property"
          />
        </center>
        <PropertyCardTitle
          title={title}
          verificationStatus={property.verificationStatus}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <center>
              <Typography
                component="h4"
                variant="body2"
                style={{
                  marginLeft: 30,
                  fontFamily: "Montserrat",
                  color: "#0D6EFD",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                Price
              </Typography>
            </center>
          </Grid>
          <Grid item xs={6}>
            <Typography
              component="h4"
              variant="body1"
              style={{
                marginLeft: 30,
                fontFamily: "Montserrat",
                color: "#0D6EFD",
                fontWeight: 500,
                fontSize: 20,
              }}
            >
              {price + " "} ETH
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              style={{
                paddingRight: 10,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                fontFamily: "Montserrat",
              }}
              onClick={viewDetailsHandle}
            >
              View Details
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default PropertyCard;
