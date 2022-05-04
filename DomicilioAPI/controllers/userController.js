const db = require('../models')

const bcrypt = require("bcrypt");
const saltRounds = 10;


// image Upload
const multer = require('multer')
const path = require('path');
const { USER } = require('../config/dbConfig');

// create main Model
const User = db.users



// main work

// 1. create user

const addUser = async (req, res) => {
    const password = req.body.password;    
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    let info = {
        nome: req.body.nome,
        username: req.body.username,
        password: encryptedPassword,
        tipoUtilizador: req.body.tipoUtilizador,
        dataNascimento: req.body.dataNascimento,
        image: req.file.path,
        telemovel: req.body.telemovel,
        email: req.body.email
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}

// 2. get all users
const getAllUsers = async(req, res) => {

    let users = await User.findAll({
    })
    res.status(200).send(users)
}


// 3. get single user

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)

}

// 3. get single user by Username

const getUserByUsername = async (req, res) => {

    let users = await User.findAll({
        attributes: ['username']
    })
    res.status(200).send(users)

}

// 3. get single user by Password

const getUserByPassword = async (req, res) => {

    let users = await User.findAll({
        attributes: ['password']
            })
    res.status(200).send(users)

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


// Login controller
const login = async (req, res) => {
	// Capture the input fields
	let username = req.body.username;
	let password = req.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.username = username;
				// Redirect to home page
				//response.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
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


module.exports = {
    getAllUsers,
    addUser,
    getOneUser,
    updateUser,
    deleteUser,
    upload,
    login,
    getUserByUsername,
    getUserByPassword,
    
}