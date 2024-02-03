const DishesByRestaurantIdModel = require("../../models/DishesByRestaurantId");
const RestaurantsModel = require("../../models/Restaurants");

const uploadOnCloudinary = require("../../utils/cloudinary");

const getRandomId = () => {
  // Generate a random 5-digit ID
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};

const generateUniqueDishId = async () => {
  let isUnique = false;
  let dishId;

  while (!isUnique) {
    dishId = getRandomId();

    // Check if the generated dishId is unique using your MongoDB query
    const existingDish = await DishesByRestaurantIdModel.findOne({
      "data.cards": {
        $elemMatch: {
          "groupedCard.cardGroupMap.REGULAR.cards": {
            $elemMatch: {
              "card.card.itemCards": {
                $elemMatch: {
                  "card.info.id": dishId,
                },
              },
            },
          },
        },
      },
    });

    // If the dishId is not found in the database, it's unique
    isUnique = !existingDish;
  }

  return dishId;
};

const addDish = async (req, res) => {
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
    console.log(req.params.id);
    const restaurantToAddDish = await RestaurantsModel.findOne({ "info.feeDetails.restaurantId": req.params.id });

    if (restaurantToAddDish) {
      //check whether restaurant exists or not
      const {
        id: restaurantId,
        name: restaurantName,
        cloudinaryImageId: restaurantImgId,
        locality,
        areaName,
        cuisines,
        avgRating,
      } = restaurantToAddDish.info;
      const { name, description, price, categoryName } = req.body;
      const dishId = generateUniqueDishId();
      console.log("dishName:", name);

      if ([name, description, price, categoryName].some((field) => field?.trim() === "")) return res.status(400).send("All fields are required");

      console.log("dishId:", dishId, "dishName", name);
      // const existedDish = await DishesByRestaurantIdModel.findOne({
      //   $or: [{ "info.feeDetails.restaurantId": restaurantId }, { "info.name": restaurantName }],
      // });

      const existedDish = await DishesByRestaurantIdModel.findOne({
        "data.cards": {
          $elemMatch: {
            "groupedCard.cardGroupMap.REGULAR.cards": {
              $elemMatch: {
                "card.card.itemCards": {
                  $elemMatch: {
                    $or: [{ "card.info.id": dishId }, { "card.info.name": name }],
                  },
                },
              },
            },
          },
        },
      });

      if (existedDish) return res.status(409).send("dishID or Dish Name already exists");

      const dishImgLocalPath = req.files?.dishImg[0]?.path;
      if (!dishImgLocalPath) return res.status(400).send("dishImg is required");

      let dishImg = await uploadOnCloudinary(dishImgLocalPath);

      if (!dishImg) return res.status(400).send("dishImg is required, dishImg upload failed");
      else dishImg = dishImg.match(/upload\/(v\d+\/[a-zA-Z0-9]+)\.jpg/)[1];
      console.log("dishImg:", dishImg);
      const newDish = await DishesByRestaurantIdModel.create({
        data: {
          cards: [
            {
              card: {
                card: {
                  info: {
                    id: restaurantId,
                    name: restaurantName,
                    cloudinaryImageId: restaurantImgId,
                    locality: locality,
                    areaName: areaName,
                    cuisines: [cuisines],
                    avgRating: avgRating,
                  },
                },
              },
            },
            {
              card: {
                card: {
                  id: "",
                },
              },
            },
            {
              groupedCard: {
                cardGroupMap: {
                  REGULAR: {
                    cards: [
                      {
                        card: {
                          card: {
                            isPureVeg: true,
                          },
                        },
                      },
                      {},
                      {
                        id: dishId,
                        name: String,
                        category: String,
                        description: String,
                        imageId: String,
                        isVeg: Number,
                        price: Number,
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      });
      if (!newRestaurant) return res.status(500).send("Failed to create restaurant");
      console.log(newRestaurant);
      const createdRestaurant = await RestaurantsModel.findById(newRestaurant._id);

      if (!createdRestaurant) return res.status(500).send("Something went wrong while registering the user,Failed to fetch created restaurant");

      return res.status(201).json({ createdRestaurant });
    } else {
      res.status(404).send("Restaurant not found");
    }
  } catch (error) {
    console.error("Error adding restaurant:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { addDish };
