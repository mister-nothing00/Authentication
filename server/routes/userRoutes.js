import express from "express";
import {registerUser, loginUser, myProfile, logoutUser} from "../controllers/userControllers.js"
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, myProfile);
router.get("/logout", protect, logoutUser)

export default router;
