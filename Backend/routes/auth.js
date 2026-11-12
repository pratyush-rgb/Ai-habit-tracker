import express from "express";
import {
  register,
  login,
  me,
  updateProfile,
} from "../controllers/authController.js";
import { protect } from "../middlewires/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);
router.put("/me", protect, updateProfile);

export default router;