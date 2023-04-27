import express from "express";
import { getSales } from "../controllers/sales.js";

const router = express.Router();
router.get("/sales", getSales);
router.get("/sales/daily", getSales);
router.get("/sales/monthly", getSales);
export default router;
//basic scheleton