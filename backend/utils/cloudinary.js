const cloudinary = require("cloudinary").v2;
const fs = require("fs");

console.log("process.env.CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("process.env.CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("process.env.CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log("uploadOnCloudinary running");
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file is uploaded on cloudinary", response.url);
    return response.url;
  } catch (error) {
    console.log("upload on cloudinary not working");
    fs.unlinkSync(localFilePath);
    //remove the   locally saved temporary file as the upload operation got failed
    return null;
  }
};
module.exports = uploadOnCloudinary;
