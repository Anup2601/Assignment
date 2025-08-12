import { Router } from "express";
const router = Router();
import { createCar, getCars, getCarById, updateCar, deleteCar } from "../controllers/carControllers.js";
import { validateListing } from "../validations/listingsValidations.js";

router.post("/",validateListing, createCar);
router.get("/", getCars);
router.get("/:id", getCarById);
router.put("/:id",validateListing, updateCar);
router.delete("/:id", deleteCar);

export default router;
