import React from "react";
import Grid from "@mui/material/Grid";
import ImageCarousel from "../../Property/ImageCarousel/ImageCarousel";
import PropertyDescription from "../../Property/PropertyDescription/PropertyDescription";
import PropertyAmenities from "../../Property/PropertyAmenities/PropertyAmenities";
import PropertyDetails from "./PropertyDetails";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import { RPC } from "../../../constants";
import axios from "axios";
import NFTMarketplace from "../../../contracts/NFTMarketplace.json";

//Send a req to backend to get the
//property details

function ViewPropertyDetails(props) {
  const { contract, id } = useParams();
  const [property, setProperty] = React.useState(null);

  React.useEffect(async () => {
    const web3 = new ethers.providers.JsonRpcProvider(RPC);
    var nftContract = new ethers.Contract(contract, NFTMarketplace.abi, web3);
    var url = await nftContract.tokenURI(id);
    var data = await nftContract.idToMarketItem(id);
    var metadata = await axios.get(url);
    metadata = metadata.data.attributes;

    metadata = {
      ...metadata,
      data,
    };
    console.log(metadata);
    setProperty(metadata);
  }, []);
  return (
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      {property === null ? (
        <></>
      ) : (
        <>
          {" "}
          <Grid item xs={12} md={6}>
            <ImageCarousel imageUrlList={property.imageUrlList} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PropertyDetails property={property} signer={props.signer} />
          </Grid>
          <Grid item xs={12} md={12}>
            <PropertyDescription property={property} />
          </Grid>
          <Grid item xs={12} md={12}>
            <PropertyAmenities property={property} />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default ViewPropertyDetails;
