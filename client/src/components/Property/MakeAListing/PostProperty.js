import React, { useEffect } from "react";

function PostProperty(props) {
  useEffect(() => {
    console.log(props.property);
  }, []);
  return (
    <>
      <h1>This is post property</h1>
    </>
  );
}

export default PostProperty;
