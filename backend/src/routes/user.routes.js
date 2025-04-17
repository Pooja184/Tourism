import { Router } from "express";
import {
  contactUs,
  createBooking,
  createReview,
  getAllFavorites,
  getBookingDetails,
  Getdeatils,
  getReviews,
  getUser,
  loginUser,
  registerUser,
  StoreTour,
  toggleFavorite,
} from "../controllers/user.controller.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

//how url works
// http://localhost:8000/api/v1/users/register

router.route("/login").post(loginUser);
router.route("/userDetails/:id").get(getUser);
router.route("/bookTour").post(createBooking);
router.route("/bookingDetails/:id").get(getBookingDetails);
router.route("/reviews").post(createReview);
router.route("/getReviews").get(getReviews);
router.route("/storetour").post(StoreTour);
router.route("/gettour").get(Getdeatils);
router.route("/contact").post(contactUs);
router.route("/favourites").post(toggleFavorite);
router.route("/getAllFavourites/:userId").get(getAllFavorites);
// router.route("/payment").post(paymentGateway);

//Secured routes
// router.route("/logout").post( verifyJWT, logoutUser)
// router.route("/contact").post(contactUs)

export default router;
