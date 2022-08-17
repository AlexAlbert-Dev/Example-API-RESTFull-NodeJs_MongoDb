import express from "express";
import CompradorController from "../controllers/CompradoresController.js";

const router = express.Router();

router
    .get("/Compradores", CompradorController.getAllCompradores)

export default router;