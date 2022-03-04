import React, { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace/Marketplace";
import About from "./components/About";
import UserLogin from "./components/User/UserLogin";
import UserSignup from "./components/User/UserSignup";
import BrokerLogin from "./components/Broker/BrokerLogin";
import Kyc from "./components/User/Kyc";
import MakeAListing from "./components/Property/MakeAListing/MakeAListing";
import ContactUs from "./components/ContactUs";
import MetamaskWallet from "./components/MetamaskWallet";
import Logout from "./components/Logout";
import BrokerDashboard from "./components/Broker/BrokerDashboard/BrokerDashboard";
import Navbar from "./components/Navbar/Navbar";
import { initialClient } from "./utils/AuthenticateUser";
import BasicDetails from "./components/Property/MakeAListing/BasicDetails/BasicDetails";
import LocationDetails from "./components/Property/MakeAListing/LocationDetails/LocationDetails";
import PropertyProfile from "./components/Property/MakeAListing/PropertyProfile/PropertyProfile";
import Photos from "./components/Property/MakeAListing/Photos/Photos";
import Pricing from "./components/Property/MakeAListing/Pricing/Pricing";
import Amenities from "./components/Property/MakeAListing/Amenities/Amenities";
import PostProperty from "./components/Property/MakeAListing/PostProperty";
import VerifyProperty from "./components/Broker/VerifyProperty";

function App() {
  const [client, setClient] = useState(initialClient);
  const [property, setProperty] = useState({});
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
            element={
              <BasicDetails property={property} setProperty={setProperty} />
            }
          />
          <Route
            path="/make-a-listing/location-details"
            element={
              <LocationDetails property={property} setProperty={setProperty} />
            }
          />
          <Route
            path="/make-a-listing/property-profile"
            element={
              <PropertyProfile property={property} setProperty={setProperty} />
            }
          />
          <Route
            path="/make-a-listing/amenities"
            element={
              <Amenities property={property} setProperty={setProperty} />
            }
          />
          <Route
            path="/make-a-listing/photos"
            element={<Photos property={property} setProperty={setProperty} />}
          />
          <Route
            path="/make-a-listing/pricing"
            element={<Pricing property={property} setProperty={setProperty} />}
          />
          <Route
            path="/make-a-listing/post-property"
            element={<PostProperty property={property} />}
          />
          <Route
            path="/verify-property/:propertyId"
            element={<VerifyProperty />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
