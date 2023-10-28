// const RestaurantsModel = require("../models/Restaurants");

// const getRestaurants = async (req, res) => {
//   const results = await RestaurantsModel.find({});
//   return res.status(200).send(results);
// };
// module.exports = { getRestaurants };

const RestaurantsModel = require("../models/Restaurants");

const getRestaurants = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await RestaurantsModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { getRestaurants };
