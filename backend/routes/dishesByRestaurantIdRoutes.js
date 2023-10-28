const express = require("express");
const router = express.Router();
const { getDishesByRestaurantId } = require("../controllers/dishesByRestaurantIdController");

router.get("/restaurants/:restaurantId", (req, res) => {
  console.log("GET /api/dishesByRestaurantId endpoint is hit.");
  getDishesByRestaurantId(req, res);
});

module.exports = router;
