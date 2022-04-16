import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import UserNavbar from "./UserNavbar";
import BrokerNavbar from "./BrokerNavbar";

function Navbar(props) {
  let navbar = <ResponsiveAppBar connectWallet={props.connectWallet}/>;
  if (props.client.logInStatus && props.client.type === "user") {
    navbar = <UserNavbar connectWallet={props.connectWallet}/>;
  } else if (props.client.logInStatus && props.client.type === "broker") {
    navbar = <BrokerNavbar connectWallet={props.connectWallet}/>;
  }
  return <>{navbar}</>;
}

export default Navbar;
