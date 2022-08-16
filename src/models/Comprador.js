import mongoose from "mongoose";

const compradorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        endereco: {type: String, required: true},
        telefonePrincipal: {type: Number, required: true},
        telefoneSecundario: {type: String},
        rg: {type: Number, required: true},
        cpf: {type: Number, required: true},
        dataDeNascimento: {type: String, required: true}
    }
);

const compradores = mongoose.model('compradores', compradorSchema);

export default compradores;