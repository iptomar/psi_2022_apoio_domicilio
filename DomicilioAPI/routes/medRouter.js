// import controller medicamentos
const medController = require('../controllers/medController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allMed', medController.getAllMed)

router.post('/addMed', medController.addMed)

router.put('/:id', medController.updateMed)

router.delete('/:id', medController.deleteMed)



module.exports = router