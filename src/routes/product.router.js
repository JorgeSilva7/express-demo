import express from "express";
import {
	getProduct,
	getProductPhotos,
	getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.get("/:id/photos/:photoId", getProductPhotos);

export default router;
