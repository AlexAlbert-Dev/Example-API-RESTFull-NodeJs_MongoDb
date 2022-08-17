import express from "express";
import CompradorController from "../controllers/CompradoresController.js";

const router = express.Router();

router
    .get("/compradores", CompradorController.getAllCompradores)
    .post("/compradores", CompradorController.postComprador)
    
export default router;