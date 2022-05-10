// import controller users
const mediController = require('../controllers/mediController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allMed', mediController.getAllMed)

router.post('/addMed', mediController.upload, mediController.addMed)

router.put('/:id', mediController.updateMed)

router.delete('/:id', mediController.deleteMed)



module.exports = router