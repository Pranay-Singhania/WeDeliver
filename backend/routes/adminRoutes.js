const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer.middleware.js");

const { addRestaurant, deleteRestaurant } = require("../controllers/adminController/adminRestaurantController.js");
const { addDish } = require("../controllers/adminController/adminDishController.js");
// const { addDish, updateDish, deleteDish } = require("../controllers/adminController/adminProductController.js");
// const { addUser, updateUser, deleteUser } = require("../controllers/adminController/adminUserController.js");

router.use("/addRestaurant", (req, res, next) => {
  console.log("POST /api/addRestaurant endpoint is hit.");
  next(); // Move to the next middleware or route handler
});
router.use("/admin/deleteRestaurant/:id", (req, res, next) => {
  console.log("DELETE /deleteRestaurant/:id endpoint is hit.");
  next(); // Move to the next middleware or route handler
});

router.post("/admin/addRestaurant", upload.fields([{ name: "restaurantImg", maxCount: 1 }]), addRestaurant);
router.delete("/admin/deleteRestaurant/:id", deleteRestaurant);
router.post("/admin/addDish/:id", upload.fields([{ name: "dishImg", maxCount: 1 }]), addDish);
// router.post("/updateRestaurant", updateRestaurant);
// router.post("/addProduct", addDish);
// router.post("/updateProduct", updateDish);
// router.post("/deleteProduct", deleteDish);
// router.post("/addUser", addUser);
// router.post("/updateUser", updateUser);
// router.post("/deleteUser", deleteUser);

module.exports = router;
