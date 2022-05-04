// import controller users
const userController = require('../controllers/userController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allUsers', userController.getAllUsers)

router.post('/addUser', userController.uploadFoto , userController.addUser)

router.get('/:id', userController.getOneUser)

router.get('/:username', userController.getOneByName)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

router.get('/:id', userController.getFoto)

//router.post("/upload-foto", controller.uploadFoto)


module.exports = router