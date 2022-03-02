import React from "react";
import Typography from "@mui/material/Typography";

function Title(props) {
  return (
    <div className="title-div">
      <span className="title-span" style={props.style}>
        <Typography component="h4" variant="h6">
          {props.title}
        </Typography>
      </span>
    </div>
  );
}

export default Title;
