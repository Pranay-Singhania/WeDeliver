const DishesByRestaurantIdModel = require("../models/DishesByRestaurantId");

const getDishesByRestaurantId = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    console.log("restaurantId:", restaurantId);
    console.log("Attempting to find restaurants...");
    const results = await DishesByRestaurantIdModel.findOne({ "data.cards.card.card.info.feeDetails.restaurantId": restaurantId });
    // const results = await DishesByRestaurantIdModel.findOne({});
    // console.log(results?.data?.cards[0]?.card?.card?.[info]);
    return res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { getDishesByRestaurantId };
