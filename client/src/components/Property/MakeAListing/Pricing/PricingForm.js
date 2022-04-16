import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../BasicDetails/BasicDetails.css";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const ownershipType = [
  "Freehold",
  "Leasehold",
  "Co-operative society",
  "Power of Attorney",
];

function PricingForm(props) {
  const navigate = useNavigate();
  const [ownership, setOwnerShip] = useState(ownershipType[0]);

  function handleOwnershipChange(event) {
    setOwnerShip(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("price"));
    console.log(data.get("price per unit area"));
    props.setProperty((prevState) => ({
      ...prevState,
      ownership: ownership,
      price: data.get("price"),
      pricePerUnitArea: data.get("price per unit area"),
    }));
    navigate("/make-a-listing/post-property");
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
                Pricing and Other details
              </Typography>

              <Typography component="h2" variant="h6" style={{ marginTop: 25 }}>
                Ownership
              </Typography>

              <ul className="radio-list-basic-details">
                {ownershipType.map((item, id) => (
                  <li key={id} className="radio-list-item">
                    <input
                      type="radio"
                      value={item}
                      name="ownership"
                      id={item}
                      onChange={handleOwnershipChange}
                      className="radio-input"
                    />
                    <label className="radio-label" htmlFor={item}>
                      {item}
                    </label>
                  </li>
                ))}
              </ul>

              <Typography component="h2" variant="h6" style={{ marginTop: 25 }}>
                Pricing
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    name="price"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Price per unit area"
                    variant="outlined"
                    name="price per unit area"
                    fullWidth
                    style={{ marginTop: 20, marginBottom: 5 }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Post Property
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default PricingForm;
