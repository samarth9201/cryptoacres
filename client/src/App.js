import React, { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import About from "./components/About";
import UserLogin from "./components/User/UserLogin";
import UserSignup from "./components/User/UserSignup";
import BrokerLogin from "./components/Broker/BrokerLogin";
import Kyc from "./components/User/Kyc";
import MakeAListing from "./components/Property/MakeAListing/MakeAListing";
import ContactUs from "./components/ContactUs";
import MetamaskWallet from "./components/MetamaskWallet";
import Logout from "./components/Logout";
import BrokerDashboard from "./components/Broker/BrokerDashboard";
import Navbar from "./components/Navbar/Navbar";
import { initialClient } from "./utils/AuthenticateUser";
import BasicDetails from "./components/Property/MakeAListing/BasicDetails";
import LocationDetails from "./components/Property/MakeAListing/LocationDetails";
import PropertyProfile from "./components/Property/MakeAListing/PropertyProfile";
import Photos from "./components/Property/MakeAListing/Photos";
import Pricing from "./components/Property/MakeAListing/Pricing";
import Amenities from "./components/Property/MakeAListing/Amenities";

function App() {
  const [client, setClient] = useState(initialClient);

  return (
    <>
      <Router>
        <Navbar client={client} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/user-login"
            element={<UserLogin setClient={setClient} />}
          />
          <Route
            path="/user-signup"
            element={<UserSignup setClient={setClient} />}
          />
          <Route path="/broker-login" element={<BrokerLogin />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/make-a-listing" element={<MakeAListing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/metamask-wallet" element={<MetamaskWallet />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/broker-dashboard" element={<BrokerDashboard />} />

          <Route
            path="/make-a-listing/basic-details"
            element={<BasicDetails />}
          />
          <Route
            path="/make-a-listing/location-details"
            element={<LocationDetails />}
          />
          <Route
            path="/make-a-listing/property-profile"
            element={<PropertyProfile />}
          />
          <Route path="/make-a-listing/photos" element={<Photos />} />
          <Route path="/make-a-listing/pricing" element={<Pricing />} />
          <Route path="/make-a-listing/amenities" element={<Amenities />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
