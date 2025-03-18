import express from "express";
import cors from "cors";
import path from "path";
import { router } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use("/api", (req, res, next) => {
    res.header("Content-Type", "application/json");
    next();
});

app.use(express.static(path.join(__dirname, "public")));


app.use("/api", router);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
