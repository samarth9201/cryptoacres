import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.setClient({ logInStatus: false, type: "user" });
    navigate("/");    
  }, []);
  return (
    <>
      <h1>This is logout</h1>
    </>
  );
}

export default Logout;
