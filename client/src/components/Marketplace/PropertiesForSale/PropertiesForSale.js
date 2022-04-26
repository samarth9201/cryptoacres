import React from "react";
import PropertyCard from "./PropertyCard";
import Grid from "@mui/material/Grid";
import { ethers } from "ethers";
import { RPC } from "../../../constants";
import NFTMarketplace from "../../../contracts/NFTMarketplace.json";
import axios from "axios";

//Send a req to backend to get all the
//properties which are for sale

function PropertiesForSale() {
  const [properties, setProperties] = React.useState([]);
  const [contract, setContract] = React.useState(null);

  React.useEffect(async () => {
    console.log("Here");
    const web3 = new ethers.providers.JsonRpcProvider(RPC);
    var { chainId } = await web3.getNetwork();
    var address = NFTMarketplace.networks[chainId].address;

    var nftContract = new ethers.Contract(address, NFTMarketplace.abi, web3);

    var myNFT = await nftContract.fetchMarketItems();
    console.log(myNFT);
    var p = [];

    for (var i = 0; i < myNFT.length; i++) {
      if (myNFT[i].tokenId.toString() !== "0") {
        var uri = await nftContract.tokenURI(myNFT[i].tokenId);
        var data = await nftContract.idToMarketItem(myNFT[i].tokenId);
        var d = await axios.get(uri);
        d = {
          ...d.data.attributes,
          address,
          data,
          tokenId: myNFT[i].tokenId,
          verificationStatus:
            myNFT[i].verified === true ? "Verified" : "Unverified",
        };

        console.log("Here");
        console.log(d);
        p.push(d);
      }
    }
    setProperties(p);
    setContract(address);
  }, []);
  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: 50, paddingLeft: 50, paddingRight: 20 }}
    >
      {properties.map((property, id) => {
        return (
          <Grid key={id} item xs={12} md={3} style={{ padding: 15 }}>
            <PropertyCard property={property} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PropertiesForSale;
