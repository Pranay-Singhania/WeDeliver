const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const absolutePath = path.resolve(__dirname, "../public/temp/");
    console.log(absolutePath);
    cb(null, absolutePath);
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
    console.log(file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log("Original File Name:", file.originalname);
    // Add any file filter logic if needed
    cb(null, true);
  },
});

module.exports = upload;
