const mongoose = require("mongoose");
// Define a schema for the `fees` array

const slugSchema = new mongoose.Schema({
  restaurant: String,
  city: String,
});

const offerInfoWithStyleSchema = new mongoose.Schema({
  offers: [
    {
      info: {
        header: String,
        offerTagColor: String,
        offerIds: [String],
        expiryTime: Date,
        couponCode: String,
        description: String,
        offerType: String,
        restId: String,
        offerLogo: String,
        descriptionTextColor: String,
      },
      cta: {
        type: String,
      },
    },
  ],
  habitMilestoneInfo: {
    callout: {}, // Define the structure of callout object
  },
});

const slaSchema = new mongoose.Schema({
  restaurantId: String,
  lastMileTravel: Number,
  serviceability: String,
  rainMode: String,
  longDistance: String,
  lastMileTravelString: String,
  iconType: String,
});

const orderabilitySchema = new mongoose.Schema({
  title: {
    text: String,
  },
  subTitle: {
    text: String,
  },
  message: {
    text: String,
    textColour: String,
  },
  customIcon: {
    bgGradientColorStart: String,
    bgGradientColorEnd: String,
  },
});

const availabilitySchema = new mongoose.Schema({
  nextOpenTimeMessage: String,
  nextOpenTime: Date,
  visibility: Boolean,
  restaurantClosedMeta: {},
});

const feeSchema = new mongoose.Schema({
  name: String,
  fee: Number,
});

// Define a schema for the `labels` array
const labelsSchema = new mongoose.Schema({
  title: String,
  message: String,
});

// Define a schema for the `offerInfo` array
const offerInfoSchema = new mongoose.Schema({
  header: String,
  offerTag: String,
  offerTagColor: String,
  offerIds: [String],
  expiryTime: Date,
  couponCode: String,
  description: String,
  offerType: String,
  restId: String,
  offerLogo: String,
  descriptionTextColor: String,
});

const infoSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  description: String,
  imageId: String,
  isVeg: Number,
  price: Number,
  variants: {},
  variantsV2: {},
  itemAttribute: {
    vegClassifier: String,
  },
  ribbon: {},
  type: String,
  itemBadge: {},
  badgesV2: {},
  ratings: {
    aggregatedRating: {
      rating: String,
      ratingCount: String,
      ratingCountV2: String,
    },
  },
});

// Define a schema for the `itemCards` array
const itemCardSchema = new mongoose.Schema({
  id: String,
  name: String,
  city: String,
  slugs: slugSchema,
  uniqueId: String,
  cloudinaryImageId: String,
  locality: String,
  areaName: String,
  costForTwo: String,
  costForTwoMessage: String,
  cuisines: [String],
  avgRating: Number,
  veg: Boolean,
  feeDetails: {
    restaurantId: String,
    fees: [feeSchema],
    totalFee: Number,
    icon: String,
    message: String,
  },
  parentId: String,
  avgRatingString: String,
  totalRatingsString: String,
  sla: slaSchema,
  availability: availabilitySchema,
  aggregatedDiscountInfo: {
    header: String,
    shortDescriptionList: [offerInfoSchema],
    descriptionList: [offerInfoSchema],
    visible: Boolean,
  },
  badges: {},
  slugString: String,
  labels: [labelsSchema],
  totalRatings: Number,
  aggregatedDiscountInfoV2: offerInfoSchema,
  type: String,
  headerBanner: {
    url: String,
  },
  ratingSlab: String,
  availabilityServiceabilityMessage: String,
  orderabilityCommunication: orderabilitySchema,
  cartOrderabilityNudgeBanner: {
    parameters: Object,
    presentation: Object,
  },
  latLong: String,
});

const dishesByRestaurantIdSchema = new mongoose.Schema({
  statusCode: Number,
  data: {
    statusMessage: String,
    cards: [
      {
        card: {
          card: {
            "@type": String,
            info: itemCardSchema,
            // {
            //   id: String,
            //   name: String,
            //   city: String,
            //   slugs: slugSchema,
            //   uniqueId: String,
            //   cloudinaryImageId: String,
            //   locality: String,
            //   areaName: String,
            //   costForTwo: String,
            //   costForTwoMessage: String,
            //   cuisines: [String],
            //   avgRating: Number,
            //   veg: Boolean,
            //   feeDetails: {
            //     restaurantId: String,
            //     fees: [feeSchema],
            //     totalFee: Number,
            //     icon: String,
            //     message: String,
            //   },
            //   parentId: String,
            //   avgRatingString: String,
            //   totalRatingsString: String,
            //   sla: slaSchema,
            //   availability: availabilitySchema,
            //   aggregatedDiscountInfo: {
            //     header: String,
            //     shortDescriptionList: [offerInfoSchema],
            //     descriptionList: [offerInfoSchema],
            //     visible: Boolean,
            //   },
            //   badges: {},
            //   slugString: String,
            //   labels: [labelsSchema],
            //   totalRatings: Number,
            //   aggregatedDiscountInfoV2: offerInfoSchema,
            //   type: String,
            //   headerBanner: {
            //     url: String,
            //   },
            //   ratingSlab: String,
            //   availabilityServiceabilityMessage: String,
            //   orderabilityCommunication: orderabilitySchema,
            //   cartOrderabilityNudgeBanner: {
            //     parameters: Object,
            //     presentation: Object,
            //   },
            //   latLong: String,
            // }
            analytics: Object,
          },
          relevance: {
            type: String,
            sectionId: String,
          },
        },
      },
      {
        card: {
          card: {
            "@type": String,
            layout: Object,
            id: String,
            gridElements: {
              infoWithStyle: offerInfoWithStyleSchema,
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [infoSchema],
              menuVegFilterAndBadge: {
                isPureVeg: Boolean,
                badges: {},
                vegOnlyDetails: {
                  imageId: String,
                  title: String,
                  description: String,
                },
                topRatedFilter: Object,
              },
              restaurantLicenseInfo: {
                type: String,
                imageId: String,
                text: [String],
              },
              restaurantAddress: {
                name: String,
                area: String,
                completeAddress: String,
              },
            },
          },
        },
      },
    ],
    firstOffsetRequest: Boolean,
    isQCLink: Boolean,
  },
  tid: String,
  sid: String,
  deviceId: String,
  csrfToken: String,
});

// const dishesByRestaurantIdSchema = new mongoose.Schema({ name: String });
const DishesByRestaurantIdModel = mongoose.model("alldishes", dishesByRestaurantIdSchema);

// const DishesByRestaurantIdModel = mongoose.model("alldishes", {
//   name: { type: String, required: true },
// });
console.log("model is being used");
module.exports = DishesByRestaurantIdModel;
