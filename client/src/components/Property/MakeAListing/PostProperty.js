import React, { useEffect } from "react";
import { makeAListing } from "../../../service/propertyAPI";

function PostProperty(props) {
  useEffect(() => {
    console.log(props.property);
    makeAListing(props.property);
    console.log("property posted successfully");
  }, []);
  return (
    <>
      <h1>This is post property</h1>
    </>
  );
}

export default PostProperty;
