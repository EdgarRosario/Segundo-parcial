import express from "express";
import { getData, postData } from "./controllers";

export const router = express.Router();

// get
router.get("/datos", getData);

// Post
router.post("/datos", postData);