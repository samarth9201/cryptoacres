import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import NFTMarketplace from "../../../contracts/NFTMarketplace.json";
import { ethers } from "ethers";
import axios from "axios";
import { API } from "../../../constants";

function BrokerDashboard(props) {
  const [propertiesToVerify, setProperties] = React.useState([]);
  const [contract, setContract] = React.useState(null);
  const title =
    "You have " + propertiesToVerify.length + " new properties to verify";

  React.useEffect(async () => {
    if (props.signer === null) {
      console.log("Please Connect to MetaMask");
    } else {
      var { chainId } = await props.signer.provider.getNetwork();
      var address = NFTMarketplace.networks[chainId].address;

      var nftContract = new ethers.Contract(
        address,
        NFTMarketplace.abi,
        props.signer
      );

      var u = await props.signer.getAddress();
      u = await nftContract.isVerifier(u);

      var myNFT = await nftContract.fetchUnverifiedTokens();
      var p = [];

      for (var i = 0; i < myNFT.length; i++) {
        var uri = await nftContract.tokenURI(myNFT[i].tokenId);
        var data = await nftContract.idToMarketItem(myNFT[i].tokenId);
        var d = await axios.get(uri);
        d = {
          ...d.data.attributes,
          tokenId: myNFT[i].tokenId,
          verificationStatus:
            myNFT[i].verified === true ? "Verified" : "Unverified",
          data,
        };
        var user = await axios.post(`${API}/api/users`, {
          PublicKey: d.data.seller,
        });
        user = user.data.user;

        d = {
          ...d,
          user,
          address,
        };
        console.log(d);
        p.push(d);
      }
      console.log(p);
      setProperties(p);
      setContract(address);
    }
  }, [props.signer]);
  return (
    <>
      <Title title={title} />
      <Typography
        component="h3"
        variant="h5"
        style={{ marginLeft: 30, fontFamily: "Montserrat" }}
      >
        Property Listings
      </Typography>

      {propertiesToVerify.map((property, id) => {
        return <PropertyCard key={id} property={property} />;
      })}
    </>
  );
}

export default BrokerDashboard;
