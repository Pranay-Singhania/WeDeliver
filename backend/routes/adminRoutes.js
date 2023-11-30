const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer.middleware.js");

const { addRestaurant } = require("../controllers/adminController/adminRestaurantController.js");
// const { addDish, updateDish, deleteDish } = require("../controllers/adminController/adminProductController.js");
// const { addUser, updateUser, deleteUser } = require("../controllers/adminController/adminUserController.js");
router.use("/addRestaurant", (req, res, next) => {
  console.log("POST /api/addRestaurant endpoint is hit.");
  next(); // Move to the next middleware or route handler
});
router.post("/addRestaurant", upload.single("restaurantImg"), addRestaurant);
// router.post("/updateRestaurant", updateRestaurant);
// router.post("/deleteRestaurant", deleteRestaurant);
// router.post("/addProduct", addDish);
// router.post("/updateProduct", updateDish);
// router.post("/deleteProduct", deleteDish);
// router.post("/addUser", addUser);
// router.post("/updateUser", updateUser);
// router.post("/deleteUser", deleteUser);

module.exports = router;
