const RestaurantsModel = require("../models/Restaurants");

const { uploadOnCloudinary } = require("../../utils/cloudinary");

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

  const { restaurantName, locality, areaName, costForTwo, cuisines, avgRating } = req.body;
  const restaurantId = getRandomId();
  console.log("restaurantName:", restaurantName);

  if ([restaurantName, locality, areaName, costForTwo, cuisines].some((field) => field?.trim() === ""))
    return res.status(400).send("All fields are required");

  const existedRestaurant = await RestaurantsModel.findOne({
    $or: [{ restaurantId }, { restaurantName }],
  });
  if (existedRestaurant) return res.status(409).send("RestaurantID or Restaurant Name already exists");

  const restaurantImgLocalPath = req.files?.restaurantImg?.path;
  if (!restaurantImgLocalPath) return res.status(400).send("restaurantImg is required");

  const restaurantImg = await uploadOnCloudinary(restaurantImgLocalPath);

  if (!restaurantImg) return res.status(400).send("restaurantImg is required");
  const newRestaurant = RestaurantsModel.create({
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
  const createdRestaurant = await RestaurantsModel.findById(newRestaurant._id);

  if (!createdRestaurant) return res.status(500).send("Something went wrong while registering the user");

  return res.status(201).json({ createdRestaurant });

  //   try {
  //     console.log("Attempting to add restaurant...");
  //     // Generate a random 5-digit ID
  //     const restaurantId = getRandomId();
  //     // Example data for a new restaurant
  //     const newRestaurant = {
  //       info: {
  //         id: restaurantId,
  //         name: req.body.name,
  //         cloudinaryImageId: req.body.cloudinaryImageId,
  //         locality: req.body.locality,
  //         areaName: req.body.areaName,
  //         costForTwo: req.body.costForTwo,
  //         cuisines: req.body.cuisines,
  //         avgRating: req.body.avgRating,
  //         feeDetails: {
  //           restaurantId: restaurantId,
  //         },
  //         // Include other properties from req.body as needed
  //       },
  //     };
  //     const restaurantInstance = new RestaurantsModel(newRestaurant);
  //     await restaurantInstance.save();
  //     console.log("Restaurant added successfully!");
  //     return res.status(200).send({ message: "Restaurant added successfully!" });
  //   } catch (error) {
  //     console.error("Error adding restaurant:", error);
  //     return res.status(500).send({ error: "Internal server error" });
  //   }
};
module.exports = { addRestaurant };
