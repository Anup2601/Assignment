import { Router } from "express";
const router = Router();
import { createBike,getBikes, updateBike, deleteBike, getBikeById } from "../controllers/bikeControllers.js";


router.post("/", createBike);
router.get("/", getBikes);
router.get("/:id", getBikeById);
router.put("/:id", updateBike);
router.delete("/:id", deleteBike);

export default router;