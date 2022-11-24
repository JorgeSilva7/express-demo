import express from "express";
import {
	createProductV1,
	createProductV2,
	createProductV3,
	getProduct,
	getProductPhotos,
	getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/v1", createProductV1);
router.post("/v2", createProductV2);
router.post("/v3", createProductV3);

router.get("/:id", getProduct);

router.get("/:id/photos/:photoId", getProductPhotos);

export default router;
