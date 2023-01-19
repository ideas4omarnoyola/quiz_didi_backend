import express from "express";
import { registrarTest } from "../controllers/testController.js";

const router = express.Router();

router.post('/', registrarTest);

export default router;