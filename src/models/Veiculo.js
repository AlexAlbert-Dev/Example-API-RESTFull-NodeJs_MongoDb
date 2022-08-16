import mongoose, { mongo } from "mongoose";

const veiculoSchema = new mongoose.Schema(
    {
        id: {type: String},
        modelo: {type: String, required: true},
        fabricante: {type: String, required: true},
        categoria: {type: String, required: true},
        anoDeFabricacao: {type: Number, required: true},
        preco: {type: Number, required: true}
    }
);

const veiculos = mongoose.model('veiculos', veiculoSchema);

export default veiculos;