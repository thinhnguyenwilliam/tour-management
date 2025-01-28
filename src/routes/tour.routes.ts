import { Router } from "express";
import * as Controller from "../controllers/tour.controller";

const router = Router();


router.get("/", Controller.getAllTours); // Fetch all tours
//router.post("/", Controller.createTour); // Create a tour
//router.get("/:id", Controller.getTourById); // Fetch a tour by ID

export default router;
