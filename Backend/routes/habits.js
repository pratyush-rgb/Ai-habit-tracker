import express from "express";
import {
  getHabits,
  createHabit,
  deleteHabit,
  archiveHabit,
  reorderHabits,
  updateHabit,
} from "../controllers/habitController.js";

import { protect } from "../middlewires/auth.js";

const router = express.Router();

router.use(protect);

router.get("/", getHabits);
router.post("/", createHabit);
router.put("/reorder", reorderHabits);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);
router.put("/:id/archive", archiveHabit);

export default router;
