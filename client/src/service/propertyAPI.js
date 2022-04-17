import axios from "axios";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from 'ipfs-http-client'
import NFTMarketplace from "../contracts/NFTMarketplace.json"

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/difo9l89z/image/upload";

const propertyUrl = "http://localhost:8000/properties/add-property";
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export async function uploadImageToCloudinary(data) {
  return await axios.post(cloudinaryUrl, data);
}

export async function makeAListing(property, price, signer) {

  var description = property.description;
  delete property.description;

  var a = property.propertyType;
  var title = a[0].toUpperCase() + a.substring(1);

  var metadata = {
    name: `${title} ${property.propertyTypeTwo} at ${property.locationDetails.locality}, ${property.locationDetails.city}`,
    description: description,
    image: property.imageUrlList[0],
    attributes: property,
  };

  var data = JSON.stringify(metadata);
  var added = await client.add(data)
  data = `https://ipfs.io/ipfs/${added.path}`

  var {chainId} = await signer.provider.getNetwork()
  var address = NFTMarketplace.networks[chainId].address

  var nftContract = new ethers.Contract(address, NFTMarketplace.abi, signer)
  const listingPrice = await nftContract.getListingPrice()
  const tx = await nftContract.createToken(data, price, {value: listingPrice})
  const receipt = await tx.wait()

  alert("Transaction Successful: " + receipt.transactionHash)
}
