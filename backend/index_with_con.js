const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3005;

app.use(cors());
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");
const restaurants = require("./routes/restaurantRoutes");
const dishesByRestaurantId = require("./routes/dishesByRestaurantIdRoutes");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/FoodDelivery")
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));
console.log("Connected to MongoDB");

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api", userRoutes);
app.use("/api", restaurants);
app.use("/api", dishesByRestaurantId);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
