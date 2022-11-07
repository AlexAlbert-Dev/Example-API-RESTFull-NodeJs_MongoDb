import express from "express";
import veiculos from "./veiculosRoutes.js";
import compradores from "./compradoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Concessionária do Alex"})
    })

    app.use(
        express.json(),
        veiculos,
        compradores
    )
}

export default routes;