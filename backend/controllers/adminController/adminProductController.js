const DishesByRestaurantIdModel = require("../../models/DishesByRestaurantId");

const addDish = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await DishesByRestaurantIdModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

const updateDish = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await DishesByRestaurantIdModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

const deleteDish = async (req, res) => {
  try {
    console.log("Attempting to find restaurants...");
    const results = await DishesByRestaurantIdModel.find({});
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { addDish, updateDish, deleteDish };
