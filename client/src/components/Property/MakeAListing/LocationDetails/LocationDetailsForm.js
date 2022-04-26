import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function LocationDetailsForm(props) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const locationDetails = {
      city: data.get("city"),
      locality: data.get("locality"),
      society: data.get("society"),
    };
    props.setProperty((prevState) => ({
      ...prevState,
      locationDetails: locationDetails,
    }));
    navigate("/make-a-listing/property-profile");
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
              <Typography
                component="h2"
                variant="h5"
                style={{ fontFamily: "Montserrat" }}
              >
                Where is your property located?
              </Typography>

              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                name="city"
                required
                fullWidth
                style={{ marginTop: 20, marginBottom: 5 }}
                inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
              />

              <TextField
                id="outlined-basic"
                label="Locality"
                variant="outlined"
                name="locality"
                required
                fullWidth
                style={{ marginTop: 20, marginBottom: 5 }}
                inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
              />

              <TextField
                id="outlined-basic"
                label="Society"
                variant="outlined"
                name="society"
                fullWidth
                style={{ marginTop: 20, marginBottom: 5 }}
                inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
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

export default LocationDetailsForm;
