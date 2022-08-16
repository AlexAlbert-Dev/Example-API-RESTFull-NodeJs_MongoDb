import veiculos from "../models/Veiculo.js";

class VeiculoController {

    static getAllVeiculos = (req, res) => {
        veiculos.find((err, veiculos) => {
            res.status(200).json(veiculos)
        })
    }
}

export default VeiculoController;


