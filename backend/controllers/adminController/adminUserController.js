const RestaurantsModel = require("../models/Restaurants");

const addRestaurant = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await RestaurantsModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await RestaurantsModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await RestaurantsModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { addRestaurant, updateRestaurant, deleteRestaurant };
