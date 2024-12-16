import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageOnCloudinary = async (localURLForFile) => {
  try {
    if (!localURLForFile) return null;
    const result = await cloudinary.uploader.upload(localURLForFile, {
      resource_type: "auto", // jpg, png, etc
    });
    console.log(result);
    return result;
  } catch (error) {
    fs.unlinkSync(localURLForFile); // Delete the file from local storage
    console.log(error.message);
  }
};

export { uploadImageOnCloudinary };
