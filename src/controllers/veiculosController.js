import veiculos from "../models/Veiculo.js";

class VeiculoController {

    static getAllVeiculos = (req, res) => {
        veiculos.find((err, veiculos) => {
            res.status(200).json(veiculos)
        })
    }

    static getByIdVeiculo = (req, res) => {
        const id = req.params.id;

        veiculos.findById(id, (err, veiculos) => {
            if(err) {
                res.status(400).send({message : `${err.message} - Id do veículo não encontrado!`})
            } else {
                res.status(200).send(veiculos);
            }
        })
    }

    static postVeiculo = (req, res) => {
        let veiculo = new veiculos(req.body);

        veiculo.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar veiculo`})
            } else {
                res.status(201).send(veiculo.toJSON())
            }
        })
    }

    static putVeiculo = (req, res) => {
        const id = req.params.id;

        veiculos.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if(err) {
                res.status(500).send({message : `${err.message} - falha ao atualizar veículo!`})
            } else {
                res.status(200).send({message: 'Veículo atualizado com sucesso!'})
            }
        })
    }

    static deleteVeiculo = (req, res) => {
        const id = req.params.id;

        veiculos.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao excluir veículo!`})
            } else {
                res.status(200).send({message: 'Veículo excluído com sucesso!'})
            }
        })
    }
}

export default VeiculoController;


