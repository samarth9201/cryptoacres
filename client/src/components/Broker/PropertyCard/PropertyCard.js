import React from "react";
import "./PropertyCard.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import numDifferentiation from "../../../utils/NumDifferentiation";

function PropertyCard(props) {
  const navigate = useNavigate();
  const property = props.property;
  const postedBy = "Posted by " + property.user.Username;
  const address =
    property.locationDetails.society +
    ", " +
    property.locationDetails.locality +
    ", " +
    property.locationDetails.city;

  function proceedToVerificationHandle(event) {
    navigate(`/verify-property/${property.address}/${property.data.tokenId}`);
  }

  return (
    <div className="property-card">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img
            src={property.imageUrlList[0]}
            className="property-card-img"
            alt="property"
          />
        </Grid>
        <Grid item md={9}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
              }}
            >
              <div className="posted-by">
                <Typography
                  component="h4"
                  variant="h6"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  {postedBy}
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
              }}
            >
              <div className="property-card-item">
                <Typography
                  component="h4"
                  variant="h6"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Selling Price &#x20b9;{" "}
                  {numDifferentiation(parseInt(property.data.price))}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: "flex" }}>
              <div className="property-card-item">
                <Typography
                  component="h4"
                  variant="h5"
                  style={{ fontFamily: "Montserrat", fontWeight: 500 }}
                >
                  {address.toUpperCase()}
                </Typography>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                onClick={proceedToVerificationHandle}
                // className="proceed-to-verification-btn"
                style={{
                  marginTop: 25,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 40,
                  paddingRight: 40,
                  whiteSpace: "nowrap",
                  fontFamily: "Montserrat",
                  borderRadius: 50,
                }}
              >
                Proceed to Verification
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PropertyCard;
