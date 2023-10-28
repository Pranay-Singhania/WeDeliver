const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
  name: String,
  fee: Number,
});

const slaSchema = new mongoose.Schema({
  deliveryTime: Number,
  serviceability: String,
  slaString: String,
  iconType: String,
});

const badgesV2Schema = new mongoose.Schema({
  entityBadges: {
    imageBased: Object,
    textBased: Object,
    textExtendedBadges: Object,
  },
});

const aggregatedDiscountInfoV3Schema = new mongoose.Schema({
  header: String,
  subHeader: String,
  discountTag: String,
});

const differentiatedUiMediaDetailsSchema = new mongoose.Schema({
  mediaType: String,
  lottie: Object,
  video: Object,
});

const infoSchema = new mongoose.Schema({
  id: String,
  name: String,
  cloudinaryImageId: String,
  locality: String,
  areaName: String,
  costForTwo: String,
  cuisines: [String],
  avgRating: Number,
  feeDetails: {
    restaurantId: String,
    fees: [feeSchema],
    totalFee: Number,
  },
  parentId: String,
  avgRatingString: String,
  totalRatingsString: String,
  sla: slaSchema,
  availability: {
    nextCloseTime: String,
    opened: Boolean,
  },
  badges: Object,
  isOpen: Boolean,
  type: String,
  badgesV2: badgesV2Schema,
  aggregatedDiscountInfoV3: aggregatedDiscountInfoV3Schema,
  differentiatedUi: {
    displayType: String,
    differentiatedUiMediaDetails: differentiatedUiMediaDetailsSchema,
  },
  reviewsSummary: Object,
  displayType: String,
  restaurantOfferPresentationInfo: Object,
});

const ctaSchema = new mongoose.Schema({
  link: String,
  type: String,
});

const restaurantSchema = new mongoose.Schema({
  info: infoSchema,
  analytics: Object,
  cta: ctaSchema,
});

const RestaurantsModel = mongoose.model("restaurants", restaurantSchema);

module.exports = RestaurantsModel;
