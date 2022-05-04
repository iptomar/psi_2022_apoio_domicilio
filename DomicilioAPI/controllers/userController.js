const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { nextTick } = require('process')
const res = require('express/lib/response')


//const upload = require("../middleware/fotoUpload");

// create main Model
const User = db.users



// main work

// 1. create user

const addUser = async (req, res) => {

    let info = {
        nome: req.body.nome,
        username: req.body.username,
        password: req.body.password,
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

    res.status(200).send('Utilizador foi removido!')

}

// 6. Upload Image Controller



  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    fileName: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))

    }

    
});

const uploadFoto = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
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



// const uploadFoto = async (req, res) => {
//     try {
//       await upload(req, res);
  
//       if (req.foto == undefined) {
//         return res.status(400).send({ message: "Escolhe foto a adicionar" });
//       }
  
//       res.status(200).send({
//         message: "Foto adicionada com sucesso: " + req.foto.originalname,
//       });
//     } catch (err) {
//       console.log(err);
  
//       if (err.code == "LIMIT_FILE_SIZE") {
//         return res.status(500).send({
//           message: "Tamanho máximo da foto 5MB",
//         });
//       }
  
//       res.status(500).send({
//         message: `Ocorreu erro: ${err}`,
//       });
//     }
//   };

// fs.readFile(path: (err, data) =>{
// if(err) {
//     return nextTick(err)
// }
// res.setHeader('attachment: filename"' + filename + '"')
// res.send(data)
// })



  const getFoto = (req, res) => {
    let fileName = req.params.name;
    const path = path.extname(file.originalname)  + "/Images/";
  
    res.download(path + fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Foto não obtida: " + err,
        });
      }
    });
};

module.exports = {
    getAllUsers,
    addUser,
    getOneUser,
    getOneByName,
    updateUser,
    deleteUser,
    //storage,
    uploadFoto,
    getFoto
}