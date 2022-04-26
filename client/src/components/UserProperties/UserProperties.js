import React from "react";
import Grid from "@mui/material/Grid";
import PropertyCard from "./PropertyCard";
import NFTMarketplace from "../../contracts/NFTMarketplace.json";
import { ethers } from "ethers";
import axios from "axios";

//Send a req to backend to get all the
//properties which are for sale
// const properties = [myProperty, myProperty, myProperty, myProperty, myProperty];

function UserProperties(props) {
  const [properties, setProperties] = React.useState([]);
  const [contract, setContract] = React.useState(null);
  React.useEffect(async () => {
    if (props.signer === null) {
      console.log("Please Connect to MetaMask");
    } else {
      console.log("Retriveing");
      var { chainId } = await props.signer.provider.getNetwork();
      var address = NFTMarketplace.networks[chainId].address;

      var nftContract = new ethers.Contract(
        address,
        NFTMarketplace.abi,
        props.signer
      );
      var myNFT = await nftContract.fetchMyNFTs();
      var p = [];

      for (var i = 0; i < myNFT.length; i++) {
        var uri = await nftContract.tokenURI(myNFT[i].tokenId);
        var d = await axios.get(uri);
        d = {
          ...d.data.attributes,
          tokenId: myNFT[i].tokenId,
          verificationStatus:
            myNFT[i].verified === true ? "Verified" : "Unverified",
        };

        p.push(d);
      }
      setProperties(p);
      setContract(address);
    }
  }, [props.signer]);

  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: 50, paddingRight: 20, marginTop: 40 }}
    >
      {properties.length === 0 ? (
        <>{(props.signer === null)? "Connect To Metamask" : "Loading"}</>
      ) : (
        <>
          {properties.map((property, id) => {
            return (
              <Grid key={id} item xs={12} md={3} style={{ padding: 15 }}>
                <PropertyCard property={property} contract={contract} />
              </Grid>
            );
          })}
        </>
      )}
    </Grid>
  );
}

export default UserProperties;
