import { RequestHandler } from "express";
import { autocomplete } from "../services/accuweather";

// import {} from '../services/weatherstack'

export const getAutocomplete: RequestHandler = (req, res, next) => {
    if(!req.query.query){
        res.status(400).send()
    }
    const query: string = req.query.query as string
    autocomplete(query)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send({
                error: error.message
            })
        })
}