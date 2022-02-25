import axios from "axios";

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/difo9l89z/image/upload";

export async function uploadImageToCloudinary(data) {
  return await axios.post(cloudinaryUrl, data);
}
