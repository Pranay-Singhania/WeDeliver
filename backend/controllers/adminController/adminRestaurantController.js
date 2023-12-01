const RestaurantsModel = require("../../models/Restaurants");

const uploadOnCloudinary = require("../../utils/cloudinary");

const getRandomId = () => {
  // Generate a random 5-digit ID
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const addRestaurant = async (req, res) => {
  //  get restaurant details from frontend
  //  validation - not empty
  //  check if restaurant already exists: restaurantName, restaurantID
  //  check for images
  //  upload them to cloudinary
  //  create restaurant object - create entry in db
  //  remove password and refresh token field from response
  //  check for restaurant creation
  //  return response
  try {
    const { restaurantName, locality, areaName, costForTwo, cuisines, avgRating } = req.body;
    const restaurantId = getRandomId();
    console.log("restaurantName:", restaurantName);

    if ([restaurantName, locality, areaName, costForTwo, cuisines].some((field) => field?.trim() === ""))
      return res.status(400).send("All fields are required");

    console.log("restaurantId:", restaurantId, "restaurantName", restaurantName);
    const existedRestaurant = await RestaurantsModel.findOne({
      $or: [{ "info.feeDetails.restaurantId": restaurantId }, { "info.name": restaurantName }],
    });
    if (existedRestaurant) return res.status(409).send("RestaurantID or Restaurant Name already exists");

    const restaurantImgLocalPath = req.files?.restaurantImg[0]?.path;
    if (!restaurantImgLocalPath) return res.status(400).send("restaurantImg is required");

    let restaurantImg = await uploadOnCloudinary(restaurantImgLocalPath);

    if (!restaurantImg) return res.status(400).send("restaurantImg is required, restaurantImg upload failed");
    else restaurantImg = restaurantImg.match(/upload\/(v\d+\/[a-zA-Z0-9]+)\.jpg/)[1];
    console.log("restaurantImg:", restaurantImg);
    const newRestaurant = await RestaurantsModel.create({
      info: {
        id: restaurantId,
        name: restaurantName,
        cloudinaryImageId: restaurantImg,
        locality: locality,
        areaName: areaName,
        costForTwo: costForTwo,
        cuisines: cuisines,
        avgRating: avgRating,
        feeDetails: {
          restaurantId: restaurantId,
        },
      },
    });
    if (!newRestaurant) return res.status(500).send("Failed to create restaurant");
    console.log(newRestaurant);
    const createdRestaurant = await RestaurantsModel.findById(newRestaurant._id);

    if (!createdRestaurant) return res.status(500).send("Something went wrong while registering the user,Failed to fetch created restaurant");

    return res.status(201).json({ createdRestaurant });
  } catch (error) {
    console.error("Error adding restaurant:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    console.log(req.params.id);
    const restaurantToDelete = await RestaurantsModel.findOne({ "info.feeDetails.restaurantId": req.params.id });
    if (restaurantToDelete) {
      await RestaurantsModel.deleteOne({ "info.feeDetails.restaurantId": req.params.id });
      res.status(200).send("Restaurant Deleted");
    } else {
      res.status(404).send("Restaurant not found");
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Deleting Restaurant ",
    });
  }
};
module.exports = { addRestaurant, deleteRestaurant };
