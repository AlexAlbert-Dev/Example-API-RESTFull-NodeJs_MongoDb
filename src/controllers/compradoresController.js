import compradores from "../models/Comprador.js";

class CompradorController {

    static getAllCompradores = (req, res) => {
        compradores.find((err, compradores) => {
            res.status(200).json(compradores)
        })
    }
}

export default CompradorController;

