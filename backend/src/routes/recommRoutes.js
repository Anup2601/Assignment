import { Router } from "express";
const router = Router();
import { getRecommendationById,getRecommendations,createRecommendation } from "../controllers/recomController.js";

router.get("/", getRecommendations);
router.get("/:id", getRecommendationById);
router.post("/", createRecommendation);


export default router;