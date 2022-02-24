import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MakeAListing() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/make-a-listing/basic-details");
  }, []);
  return <></>;
}

export default MakeAListing;
