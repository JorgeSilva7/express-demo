import express from "express";
import reviewsRouter from "./src/routes/review.router.js";
import productsRouter from "./src/routes/product.router.js";
import { PORT } from "./src/configs/environment.js";

const app = express();

app.use(express.json());

app.use("/reviews", reviewsRouter);
app.use("/products", productsRouter);

app.get("/", function (req, res) {
	res.send("<h1>Hola mundo</h1>");
});

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
