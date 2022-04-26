import React from "react";
import "./PropertyCardTitle.css";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import Tooltip from "@mui/material/Tooltip";
import CancelIcon from '@mui/icons-material/Cancel';

function PropertyCardTitle(props) {
  return (
    <div className="property-card-title-div">
      <span className="property-card-title-span" style={props.style}>
        <center>
          <Typography
            component="h4"
            variant="h6"
            style={{ fontFamily: "Montserrat" }}
          >
            {props.title}{" "}
            {props.verificationStatus === "Verified" && (
              <Tooltip title="Verified Property">
                <VerifiedIcon
                  fontSize="small"
                  style={{ color: "rgb(32, 129, 226)" }}
                />
              </Tooltip>
            )}
            {props.verificationStatus === "Unverified" && (
              <Tooltip title="Unverified Property">
                <CancelIcon
                  fontSize="small"
                  style={{ color: "red" }}
                />
              </Tooltip>
            )}
          </Typography>
        </center>
      </span>
    </div>
  );
}

export default PropertyCardTitle;
