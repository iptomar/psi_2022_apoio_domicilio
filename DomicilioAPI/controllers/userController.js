const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const User = db.users

const bcrypt = require('bcrypt');
async function hashIt(password){
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  return hashed
}


// main work

// 1. create user

const addUser = async (req, res) => {
    let passwordEncrypted = await hashIt(req.body.password);
    let info = {
        nome: req.body.nome,
        username: req.body.username,
        password: passwordEncrypted,
        tipoUtilizador: req.body.tipoUtilizador,
        dataNascimento: req.body.dataNascimento,
        foto: req.file.path,
        telemovel: req.body.telemovel,
        email: req.body.email
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}

// 2. get all users
const getAllUsers = async(req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)
}

// 3. get single user

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)

}

// 3. get single user

const getOneByName = async (req, res) => {

    let username = req.params.username
    let user = await User.findOne({ where: { username: username }})
    res.status(200).send(user)

}

// 4. update user

const updateUser = async (req, res) => {

    let id = req.params.id

    const user = await User.update(req.body, { where: { id: id }})

    res.status(200).send(user)
   

}

// 5. delete user by id

const deleteUser = async (req, res) => {

    let id = req.params.id
    
    await User.destroy({ where: { id: id }} )

    res.status(200).send('User is deleted !')

}

// 6. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')


// 1. create user

const loginUser = async (req, res) => {
    console.log("entrei")
    let passwordEncrypted = await hashIt(req.body.password);
    let info = {
        username: req.body.username,
        password: passwordEncrypted
    }

    try{
        const user =  await User.findOne({ where: { username: req.body.username }})
        if(user==null) 
         return res.status(400).json({err : "User with  email doesnot exists.Please signup"});
  }
   catch(error){
         return res.status(500).json({err : 
                             error.message});
       }
}


module.exports = {
    getAllUsers,
    addUser,
    getOneUser,
    getOneByName,
    updateUser,
    deleteUser,
    upload, 
    loginUser
}