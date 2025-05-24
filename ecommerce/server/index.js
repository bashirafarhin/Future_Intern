import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";
import env from "dotenv";
env.config();
const app = express();

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

import user from "./routes/user.route.js";
import product from "./routes/product.route.js";
import order from "./routes/order.route.js";
import payment from "./routes/payment.route.js";

app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use(errorMiddleware);

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

export default app;
