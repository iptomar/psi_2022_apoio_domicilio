// import controller users
const userController = require('../controllers/userController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allUsers', userController.getAllUsers)

router.get('/getUsernames', userController.getUserByUsername)

router.get('/getPasswords', userController.getUserByPassword)

router.post('/addUser', userController.upload , userController.addUser)

router.get('/:id', userController.getOneUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

router.post('/login', userController.login)


module.exports = router