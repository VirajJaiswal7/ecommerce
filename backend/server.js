import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import { connectCloudinary } from "./config/cloudinary.js";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";
import cookieParser from "cookie-parser";
import { cartRoute } from "./routes/cart.route.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

// default middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(cookieParser());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRoute);

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => {
  console.log(`Your Server is run on http://localhost:${port}`);
});
