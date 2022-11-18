import express from "express";
import {
	createReview,
	getReviews,
	deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);

router.get("/", getReviews);

router.delete("/", deleteReview);

export default router;
