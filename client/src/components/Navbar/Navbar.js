import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import UserNavbar from "./UserNavbar";
import BrokerNavbar from "./BrokerNavbar";

function Navbar(props) {
  let navbar = <ResponsiveAppBar />;
  if (props.client.logInStatus && props.client.type === "user") {
    navbar = <UserNavbar />;
  } else if (props.client.logInStatus && props.client.type === "broker") {
    navbar = <BrokerNavbar />;
  }
  return <>{navbar}</>;
}

export default Navbar;
