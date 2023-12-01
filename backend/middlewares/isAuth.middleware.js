const JWT = require("jsonwebtoken");
const UserModel = require("../models/User");

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  //validation
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized User",
    });
  }
  const decodeData = JWT.verify(token, process.env.JWT_SECRET);
  req.user = await UserModel.findById(decodeData._id);
  next();
};
