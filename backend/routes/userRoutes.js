const express = require("express");

const authMidleware = require("../controllers/AuthController");
const userAuthorizationController = require("../controllers/userControllers/userAuthorizationController");

const userRoutes = express.Router();

userRoutes.post(
  "/signUp",
  userAuthorizationController.userSignUp
);
userRoutes.post(
  "/login",
  userAuthorizationController.userLogin
);
userRoutes.post(
  "/logout",
  authMidleware.checkCommonToken,
  userAuthorizationController.userLogout
);
// userRoutes.get(
//   "/getUserProfile",
//   userAuthorizationController.getUserProfile
// );

module.exports = userRoutes;