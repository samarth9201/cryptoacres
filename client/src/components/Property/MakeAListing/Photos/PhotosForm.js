import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../BasicDetails/BasicDetails.css";
import { useNavigate } from "react-router-dom";
import "./Photos.css";
import { uploadImageToCloudinary } from "../../../../service/propertyAPI";

const theme = createTheme();

function PhotosForm(props) {
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);
  const [imageUrlList, setImageUrlList] = useState([]);

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    uploadImage(file);
    previewFile(file);
    event.target.value = null;
  }

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageList([...imageList, reader.result]);
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(imageUrlList);
    props.setProperty((prevState) => ({
      ...prevState,
      imageUrlList: imageUrlList,
    }));
    navigate("/make-a-listing/pricing");
  }

  async function uploadImage(fileInput) {
    const data = new FormData();
    data.append("file", fileInput);
    data.append("upload_preset", "s0gjvwc6");
    data.append("cloud_name", "difo9l89z");
    const res = await uploadImageToCloudinary(data);
    const imgURL = await res.data.url;
    console.log(imgURL);
    setImageUrlList((prevState) => [...prevState, imgURL]);
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
              encType="multipart/form-data"
            >
              <Typography
                component="h2"
                variant="h5"
                style={{ fontFamily: "Montserrat" }}
              >
                Photos
              </Typography>

              <Button
                variant="contained"
                className="select-images-btn"
                style={{
                  margin: 20,
                  display: "block",
                  fontFamily: "Montserrat",
                }}
              >
                <input
                  type="file"
                  name="fileToUpload"
                  id="fileToUpload"
                  onChange={handleFileInputChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="fileToUpload">Upload Images</label>
              </Button>

              {imageList.map((item, id) => (
                <img
                  key={id}
                  src={item}
                  alt="chosen"
                  className="uploaded-image"
                />
              ))}

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

export default PhotosForm;
