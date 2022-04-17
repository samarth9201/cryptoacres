import React from "react";
import { makeAListing } from "../../../service/propertyAPI";
import Button from "@mui/material/Button";

function PostProperty(props) {
  const PostProperty = async () => {
    try {
      if (props.signer === null) {
        alert("Please Connect to MetaMask");
      } else {
        var price = props.property.price;
        var prop = props.property;
        delete prop.price;
        makeAListing(prop, price, props.signer);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={PostProperty}>Confirm and Post</Button>
    </>
  );
}

export default PostProperty;
