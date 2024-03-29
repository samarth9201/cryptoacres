import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme();

const areaUnit = ["sq.ft.", "sq.m.", "guntha", "acres", "hectares"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getNextTenYears() {
  const currYear = new Date().getFullYear();
  let nextTenYears = [];
  for (let i = currYear; i < currYear + 10; i++) {
    nextTenYears.push(i);
  }
  return nextTenYears;
}

function PropertyProfileForm(props) {
  const navigate = useNavigate();
  const [currAreaUnit, setCurrAreaUnit] = useState(areaUnit[0]);
  const [expectedMonth, setExpectedMonth] = useState(months[0]);
  const [expectedYear, setExpectedYear] = useState(new Date().getFullYear());
  const [furnishing, setFurnishing] = useState("");
  const [parking, setParking] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("");

  function handleAreaUnitChange(event) {
    setCurrAreaUnit(event.target.value);
  }

  function handleExpectedMonthChange(event) {
    setExpectedMonth(event.target.value);
  }

  function handleExpectedYearChange(event) {
    setExpectedYear(event.target.value);
  }

  function handleFurnishingChange(event) {
    setFurnishing(event.target.value);
  }

  function handleParkingChange(event) {
    setParking(event.target.value);
  }

  function handleAvailabilityChange(event) {
    setAvailabilityStatus(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const propertyProfile = {
      bedrooms: data.get("bedrooms"),
      bathrooms: data.get("bathrooms"),
      balconies: data.get("balconies"),
      carpetArea: data.get("carpetArea"),
      builtUpArea: data.get("builtUpArea"),
      areaUnit: currAreaUnit,
      furnishing: furnishing,
      parking: parking,
      availabilityStatus: availabilityStatus,
      ageOfProperty: data.get("ageOfProperty"),
      expectedYear: expectedYear,
      expectedMonth: expectedMonth,
    };
    props.setProperty((prevState) => ({
      ...prevState,
      propertyProfile: propertyProfile,
    }));
    navigate("/make-a-listing/amenities");
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
                Tell us about your property
              </Typography>

              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: 25, fontFamily: "Montserrat" }}
              >
                Room Details
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Bedrooms"
                    variant="outlined"
                    name="bedrooms"
                    type="number"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                    inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                    InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Bathrooms"
                    variant="outlined"
                    name="bathrooms"
                    type="number"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                    inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                    InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Balconies"
                    variant="outlined"
                    name="balconies"
                    type="number"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                    inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                    InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                  />
                </Grid>
              </Grid>

              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: 25, fontFamily: "Montserrat" }}
              >
                Area Details
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Carpet Area"
                    variant="outlined"
                    name="carpetArea"
                    type="tel"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                    inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                    InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Built-up Area"
                    variant="outlined"
                    name="builtUpArea"
                    type="tel"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                    inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                    InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    select
                    label="Unit"
                    variant="outlined"
                    name="areaUnit"
                    value={currAreaUnit}
                    onChange={handleAreaUnitChange}
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                    inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                    InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                  >
                    {areaUnit.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: 25, fontFamily: "Montserrat" }}
              >
                Furnishing
              </Typography>

              <ul className="radio-list">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={4}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="furnished"
                        name="furnishingType"
                        id="radio1"
                        onChange={handleFurnishingChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio1">
                        Furnished
                      </label>
                    </li>
                  </Grid>
                  <Grid item xs={6} md={5}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="semi-furnished"
                        name="furnishingType"
                        id="radio2"
                        onChange={handleFurnishingChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio2">
                        Semi-furnished
                      </label>
                    </li>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="unfurnished"
                        name="furnishingType"
                        id="radio3"
                        onChange={handleFurnishingChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio3">
                        Unfurnished
                      </label>
                    </li>
                  </Grid>
                </Grid>
              </ul>

              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: 25, fontFamily: "Montserrat" }}
              >
                Reserved Parking
              </Typography>

              <ul className="radio-list">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={5}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="covered parking"
                        name="parkingType"
                        id="radio4"
                        onChange={handleParkingChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio4">
                        Covered Parking
                      </label>
                    </li>
                  </Grid>
                  <Grid item xs={6} md={5}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="open parking"
                        name="parkingType"
                        id="radio5"
                        onChange={handleParkingChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio5">
                        Open Parking
                      </label>
                    </li>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="none"
                        name="parkingType"
                        id="radio6"
                        onChange={handleParkingChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio6">
                        None
                      </label>
                    </li>
                  </Grid>
                </Grid>
              </ul>

              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: 25, fontFamily: "Montserrat" }}
              >
                Availability Status
              </Typography>

              <ul className="radio-list">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="ready to move"
                        name="availabilityStatus"
                        id="radio7"
                        onChange={handleAvailabilityChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio7">
                        Ready to move
                      </label>
                    </li>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <li className="radio-list-item">
                      <input
                        type="radio"
                        value="under construction"
                        name="availabilityStatus"
                        id="radio8"
                        onChange={handleAvailabilityChange}
                        className="radio-input"
                        inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                        InputLabelProps={{
                          style: { fontFamily: "Montserrat" },
                        }}
                      />
                      <label className="radio-label" htmlFor="radio8">
                        Under construction
                      </label>
                    </li>
                  </Grid>
                </Grid>
              </ul>

              {availabilityStatus === "ready to move" && (
                <Typography
                  component="h2"
                  variant="h6"
                  style={{ marginTop: 25, fontFamily: "Montserrat" }}
                >
                  Age of property
                </Typography>
              )}
              {availabilityStatus === "ready to move" && (
                <TextField
                  id="outlined-basic"
                  label="Years"
                  variant="outlined"
                  name="ageOfProperty"
                  type="number"
                  fullWidth
                  style={{ marginTop: 20, marginBottom: 5 }}
                />
              )}

              {availabilityStatus === "under construction" && (
                <Typography
                  component="h2"
                  variant="h6"
                  style={{ marginTop: 25, fontFamily: "Montserrat" }}
                >
                  Possession By
                </Typography>
              )}
              {availabilityStatus === "under construction" && (
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      select
                      label="Expected by year"
                      variant="outlined"
                      name="expectedPossessionYear"
                      value={expectedYear}
                      onChange={handleExpectedYearChange}
                      fullWidth
                      style={{ marginTop: 20, marginBottom: 5 }}
                      inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                      InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                    >
                      {getNextTenYears().map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      select
                      label="Expected by month"
                      variant="outlined"
                      name="expectedPossessionMonth"
                      value={expectedMonth}
                      onChange={handleExpectedMonthChange}
                      fullWidth
                      style={{ marginTop: 20, marginBottom: 5 }}
                      inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
                      InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
                    >
                      {months.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ fontFamily: "Montserrat" }}
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

export default PropertyProfileForm;
