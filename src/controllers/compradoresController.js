import compradores from "../models/Comprador.js";

class CompradorController {

    static getAllCompradores = (req, res) => {
        compradores.find((err, compradores) => {
            res.status(200).json(compradores)
        })
    }

    static postComprador = (req, res) => {
        let comprador = new compradores(req.body);

        comprador.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar comprador`})
            } else {
                res.status(201).send(comprador.toJSON())
            }
        })
    }

    static putComprador = (req, res) => {
        const id = req.params.id;

        compradores.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if(err) {
                res.status(500).send({message : `${err.message} - falha ao atualizar Comprador!`})
            } else {
                res.status(200).send({message: 'Comprador atualizado com sucesso!'})
            }
        })
    }
}

export default CompradorController;

