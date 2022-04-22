import React from "react";
import PropertyCard from "./PropertyCard";
import Grid from "@mui/material/Grid";
import { ethers } from "ethers";
import { RPC } from "../../../constants";
import NFTMarketplace from "../../../contracts/NFTMarketplace.json";
import axios from "axios";

const myProperty = {
  propertyId: "1234",
  owner: {
    ownerId: "123",
    firstName: "Maurvin",
    lastName: "Shah",
  },
  postedOn: "February 2, 2022",
  imageUrlList: [
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124489/jbgklxyxhbmpfrn9hlz6.jpg",
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124495/hw476ilyyinjuzfqyuom.jpg",
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124501/e4kzadb8ikevh9nidn8m.jpg",
    "http://res.cloudinary.com/difo9l89z/image/upload/v1646124506/h4c3ck8aqpqcbdkl8vk2.jpg",
  ],
  locationDetails: {
    city: "Mumbai",
    locality: "Andheri",
    society: "Blue Heaven",
  },
  ownership: "Freehold",
  price: "6000000",
  pricePerUnitArea: "7059",
  propertyAmenities: [
    "Lift",
    "Water Storage",
    "Security Guard",
    "False Ceiling Lighting",
    "Water purifier",
    "Recently Renovated",
    "Natural Light",
    "Well Ventilated",
    "Spacious Interiors",
    "Municipal corporation",
    "Borewell / Tank",
    "Close to School",
    "Close to Market",
    "Close to Hospital",
  ],
  propertyProfile: {
    ageOfProperty: "5",
    areaUnit: "sq.ft.",
    availabilityStatus: "ready to move",
    balconies: "1",
    bathrooms: "2",
    bedrooms: "2",
    builtUpArea: "900",
    carpetArea: "850",
    expectedMonth: "January",
    expectedYear: 2022,
    furnishing: "unfurnished",
    parking: "open parking",
  },
  propertyType: "residential",
  propertyTypeTwo: "Apartment",
};

//Send a req to backend to get all the
//properties which are for sale
const properties = [myProperty, myProperty, myProperty, myProperty, myProperty];

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
      if(myNFT[i].tokenId.toString() !== "0"){
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
    <Grid container spacing={2} style={{ marginTop: 50, paddingLeft: 50, paddingRight: 20 }}>
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
