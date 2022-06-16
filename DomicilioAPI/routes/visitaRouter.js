// import controller medicamentos
const visitaController = require('../controllers/medController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allVis', visitaController.getAllVisitas)

router.post('/addVis', medController.addVisita)

router.get('/:id', medController.getOneVisita)

router.put('/:id', medController.updateVisita)

router.delete('/:id', medController.deleteVisita)

module.exports = router