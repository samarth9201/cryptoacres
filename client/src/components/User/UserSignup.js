import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "../../css/User.css";
import { addUser } from "../../service/userAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../constants";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      CRYPTOACRES {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function UserSignup(props) {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = await props.signer.getAddress();

    var user = {
      FirstName: data.get("firstName"),
      LastName: data.get("lastName"),
      Username: data.get("username"),
      Email: data.get("email"),
      PublicKey: address,
    };

    console.log(user);

    await axios.post(`${API}/api/users/signup`, user);

    await axios.post(`${API}/api/users/signup/sendotp`, {
      PublicKey: address,
    });

    navigate("/otp");

    // //send this data to backend to signup user
    // //once user is successfully signed up redirect them to home page / marketplace
    // const response = await addUser(user);

    // // console.log(response);
    // if (response.data.status === "ok") {
    //   props.setClient({ logInStatus: true, type: "user" });
    //   localStorage.setItem("token", response.data.user);
    //   localStorage.setItem("type", "user");
    //   navigate("/");
    // } else {
    //   //something went wrong -- invaild credentials
    // }
  }

  return (
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="username"
                  id="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            {/* <div className="signup-div">
              <Link to="/user-login">Already have an account? Sign in</Link>
            </div> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default UserSignup;
