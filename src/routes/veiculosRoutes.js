import express from "express";
import VeiculoController from "../controllers/veiculosController.js";

const router = express.Router();

router
    .get("/veiculos", VeiculoController.getAllVeiculos)
    .get("/veiculos/:id", VeiculoController.getByIdVeiculo)
    .post("/veiculos", VeiculoController.postVeiculo)
    .put("/veiculos/:id", VeiculoController.putVeiculo)

export default router;

