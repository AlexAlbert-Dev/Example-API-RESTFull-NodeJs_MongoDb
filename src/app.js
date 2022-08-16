import express from "express";
import db from "./config/dbConnect.js";
import veiculos from "./models/Veiculo.js";
import compradores from "./models/Comprador.js";


db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

export default app;

