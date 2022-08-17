import express from "express";
import CompradorController from "../controllers/CompradoresController.js";

const router = express.Router();

router
    .get("/compradores", CompradorController.getAllCompradores)
    .get("/compradores/:id", CompradorController.getByIdComprador)
    .post("/compradores", CompradorController.postComprador)
    .put("/compradores/:id", CompradorController.putComprador)

export default router;