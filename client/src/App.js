import React, { useState } from "react";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
import ViewPropertyDetails from "./components/Marketplace/ViewPropertyDetails/ViewPropertyDetails";
import Otp from "./components/Otp";
import UserProperties from "./components/UserProperties/UserProperties";
import UserProperty from "./components/UserProperties/UserProperty";
import { ethers } from "ethers";
import axios from "axios";
import { API } from "./constants";

function App() {
  const navigate = useNavigate();
  const [client, setClient] = useState(initialClient);
  const [property, setProperty] = useState({});
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [user, setUser] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      var data = {
        PublicKey: address,
      };
      var response = await axios.post(`${API}/api/users`, data);

      setSigner(signer);

      if (response.data.found === false) {
        setAddress(address);
        navigate("/user-signup/");
      } else {
        console.log(response.data);
        setAddress(address);
        setUser(response.data.user);
        if (response.data.user.Verified === false) {
          console.log("Sending Mail");
          var res = await axios.post(`${API}/api/users/signup/sendotp`, {
            PublicKey: address,
          });
          console.log(res);
          navigate("/otp");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar client={client} connectWallet={connectWallet} user={user}/>
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
          element={
            <UserSignup client={client} setClient={setClient} signer={signer} />
          }
        />
        <Route path="/broker-login" element={<BrokerLogin/>} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/make-a-listing" element={<MakeAListing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/metamask-wallet" element={<MetamaskWallet />} />
        <Route path="/logout" element={<Logout setClient={setClient} />} />
        <Route path="/broker-dashboard" element={<BrokerDashboard signer={signer}/>} />

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
          element={<Amenities property={property} setProperty={setProperty} />}
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
          element={<PostProperty property={property} signer={signer}/>}
        />
        <Route
          path="/verify-property/:contract/:id"
          element={<VerifyProperty signer={signer}/>}
        />
        <Route
          path="/view-property-details/"
          element={<ViewPropertyDetails />}
        />
        <Route path="/otp" element={<Otp signer={signer}/>} />
        <Route path="/user-properties" element={<UserProperties signer={signer}/>} />
        <Route path="/user-property/:contract/:id" element={<UserProperty signer={signer}/>} />
      </Routes>
    </>
  );
}

export default App;
