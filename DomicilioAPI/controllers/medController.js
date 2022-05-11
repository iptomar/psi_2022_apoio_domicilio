const db = require('../models')

// image Upload
// const multer = require('multer')
// const path = require('path')

// create main Model
const Medicamento = db.medicamentos



// main work

// 1. create Medicamentos

const addMed = async (req, res) => {

    let info = {
        nome: req.body.nome,
        farmaceutica: req.body.farmaceutica,
        principio: req.body.principio,
        dosagem: req.body.dosagem,
        formato: req.body.formato
    }

    const medicamento = await Medicamento.create(info)
    res.status(200).send(medicamento)
    console.log(medicamento)

}

// 2. get all medicamentos
const getAllMed = async(req, res) => {

    let medicamentos = await Medicamento.findAll({})
    res.status(200).send(medicamentos)
}



// 3. update Medicamentos

const updateMed = async (req, res) => {

    let id = req.params.id

    const medicamento = await Medicamento.update(req.body, { where: { id: id }})

    res.status(200).send(medicamento)
   

}

// 4. delete Medicamentos by id

const deleteMed = async (req, res) => {

    let id = req.params.id
    
    await Medicamento.destroy({ where: { id: id }} )

    res.status(200).send('Medicamentos is deleted !')

}



module.exports = {
    getAllMed,
    addMed,
    updateMed,
    deleteMed,
    
}