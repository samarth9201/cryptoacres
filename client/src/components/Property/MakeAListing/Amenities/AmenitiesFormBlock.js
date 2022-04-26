import React from "react";
import Typography from "@mui/material/Typography";
import AmenitiesFormList from "./AmenitiesFormList";

function AmenitiesFormBlock(props) {
  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        style={{ marginTop: 25, fontFamily: "Montserrat" }}
      >
        {props.title}
      </Typography>

      <AmenitiesFormList list={props.list} />
    </>
  );
}

export default AmenitiesFormBlock;
