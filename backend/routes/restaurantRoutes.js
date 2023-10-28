// const express = require("express");

// const router = express.Router();
// const { getRestaurants } = require("../controllers/restaurantController");
// router.get("/restaurants", getRestaurants);
// module.exports = router;

const express = require("express");
const router = express.Router();
const { getRestaurants } = require("../controllers/restaurantController");

router.get("/restaurants", (req, res) => {
  console.log("GET /api/restaurants endpoint is hit.");
  getRestaurants(req, res);
});

module.exports = router;
