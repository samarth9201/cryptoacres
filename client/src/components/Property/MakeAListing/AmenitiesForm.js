import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./BasicDetails.css";
import { useNavigate } from "react-router-dom";
import "./Amenities.css";
import AmenitiesFormBlock from "./AmenitiesFormBlock";
import {
  amenities,
  propertyFeatures,
  waterSource,
  locationAdvantages,
} from "./AmenitiesList";

const theme = createTheme();

function AmenitiesForm() {
  const navigate = useNavigate();
  const propertyAmenities = [];

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    amenities.map((option) => {
      if (data.get(option.name)) {
        propertyAmenities.push(option.value);
      }
    });
    propertyFeatures.map((option) => {
      if (data.get(option.name)) {
        propertyAmenities.push(option.value);
      }
    });
    waterSource.map((option) => {
      if (data.get(option.name)) {
        propertyAmenities.push(option.value);
      }
    });
    locationAdvantages.map((option) => {
      if (data.get(option.name)) {
        propertyAmenities.push(option.value);
      }
    });
    console.log(propertyAmenities);
    navigate("/make-a-listing/photos");
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              autoComplete="off"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography component="h2" variant="h5">
                Amenities / Unique features
              </Typography>

              <AmenitiesFormBlock title="Amenities" list={amenities} />
              <AmenitiesFormBlock
                title="Property features"
                list={propertyFeatures}
              />
              <AmenitiesFormBlock title="Water Source" list={waterSource} />
              <AmenitiesFormBlock
                title="Location Advantages"
                list={locationAdvantages}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default AmenitiesForm;
