import axios from "axios";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/difo9l89z/image/upload";

const propertyUrl = "http://localhost:8000/properties/add-property";

export async function uploadImageToCloudinary(data) {
  return await axios.post(cloudinaryUrl, data);
}

export async function makeAListing(property) {
  return await axios.post(propertyUrl, property);
}
