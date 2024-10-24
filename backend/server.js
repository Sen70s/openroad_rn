import express from "express";
import  dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";


dotenv.config();
const app = express();
const app_port = process.env.PORT || 1217;

app.use("/api/auth",authRoutes);

app.listen(app_port, () => {
    console.log(`Server is running on port ${app_port}`);
    connectMongoDB();
});
