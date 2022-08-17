import compradores from "../models/Comprador.js";

class CompradorController {

    static getAllCompradores = (req, res) => {
        compradores.find((err, compradores) => {
            res.status(200).json(compradores)
        })
    }

    static getByIdComprador = (req, res) => {
        const id = req.params.id;

        compradores.findById(id, (err, compradores) => {
            if(err) {
                res.status(400).send({message : `${err.message} - Id do comprador não encontrado!`})
            } else {
                res.status(200).send(compradores);
            }
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

    static deleteComprador = (req, res) => {
        const id = req.params.id;

        compradores.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao excluir comprador!`})
            } else {
                res.status(200).send({message: 'Comprador excluído com sucesso!'})
            }
        })
    }
}

export default CompradorController;

