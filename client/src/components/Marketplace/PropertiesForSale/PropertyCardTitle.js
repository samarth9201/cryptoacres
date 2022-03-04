import React from "react";
import "./PropertyCardTitle.css";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import Tooltip from "@mui/material/Tooltip";

function PropertyCardTitle(props) {
  return (
    <div className="property-card-title-div">
      <span className="property-card-title-span" style={props.style}>
        <Typography component="h4" variant="h6">
          {props.title}{" "}
          <Tooltip title="Verified Property">
            <VerifiedIcon
              fontSize="small"
              style={{ color: "rgb(32, 129, 226)" }}
            />
          </Tooltip>
        </Typography>
      </span>
    </div>
  );
}

export default PropertyCardTitle;
