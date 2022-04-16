import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./BasicDetails.css";
import PropertyOptions from "./BasicDetailsFormPropertyOptions";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function BasicDetailsForm(props) {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("");
  const [propertyTypeTwo, setPropertyTypeTwo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.setProperty((prevState) => ({
      ...prevState,
      propertyType: propertyType,
      propertyTypeTwo: propertyTypeTwo,
    }));
    navigate("/make-a-listing/location-details");
  }

  function handleChangePropertyTypeOne(event) {
    setPropertyType(event.target.value);
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
                What kind of property do you have?
              </Typography>

              <ul className="radio-list-basic-details">
                <li className="radio-list-item">
                  <input
                    type="radio"
                    value="residential"
                    name="propertyType"
                    id="radio1"
                    onChange={handleChangePropertyTypeOne}
                    className="radio-input"
                  />
                  <label className="radio-label" htmlFor="radio1">
                    Residential
                  </label>
                </li>
                <li className="radio-list-item">
                  <input
                    type="radio"
                    value="commercial"
                    name="propertyType"
                    id="radio2"
                    onChange={handleChangePropertyTypeOne}
                    className="radio-input"
                  />
                  <label className="radio-label" htmlFor="radio2">
                    Commercial
                  </label>
                </li>
              </ul>

              {propertyType.length > 0 && (
                <PropertyOptions
                  propertyType={propertyType}
                  setPropertyTypeTwo={setPropertyTypeTwo}
                />
              )}

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

export default BasicDetailsForm;
