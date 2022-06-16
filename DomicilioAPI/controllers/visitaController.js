const db = require('../models')



// create main Model
const Visita = db.visitas

// main work

// 1. create visita

const addVisita = async (req, res) => {

    let info = {
        data: req.body.data,
        notas: req.body.notas,
        utente: req.body.utente,
    }

    const visita = await Visita.create(info)
    res.status(200).send(visita)
    console.log(visita)

}

// 2. get all visitas
const getAllVisitas = async(req, res) => {

    let visitas = await Visita.findAll({})
    res.status(200).send(visitas)
}

// 3. get single visita

const getOneVisita = async (req, res) => {

    let id = req.params.id
    let visita = await Visita.findOne({ where: { id: id }})
    res.status(200).send(visita)

}

// 4. update visita

const updateVisita = async (req, res) => {

    let id = req.params.id

    const visita = await Visita.update(req.body, { where: { id: id }})

    res.status(200).send(visita)
   

}

// 5. delete visita by id

const deleteVisita = async (req, res) => {

    let id = req.params.id
    
    await Visita.destroy({ where: { id: id }} )

    res.status(200).send('Visita is deleted !')

}




module.exports = {
    getAllVisitas,
    addVisita,
    getOneVisita,
    updateVisita,
    deleteVisita
  
}