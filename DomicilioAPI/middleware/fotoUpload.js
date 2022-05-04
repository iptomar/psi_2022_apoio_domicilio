// const util = require("util");
// const multer = require("multer");

// const DIR = './Images/';

// let storage = multer.diskStorage({
//     destination: (req, foto, cb) => {
//         cb(null, DIR);
//     },
//     fotoName: (req, foto, cb) => {
//         const fotoName = foto.originalname.toLowerCase().split(' ').join('-');
//         cb(null, fotoName)
//     },
// });

// let upload = multer({
//     storage: storage,
//     limits: {
//         fotoSize: 1024 * 1024 * 5
//     },
//     fotoFilter: (req,   foto, cb) => {
//         if  (foto.mimetype == "image/png" ||  foto.mimetype == "image/jpg" ||   foto.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error( 'foto types allowed .jpeg, .jpg and .png!'));
//         }
//     }
// }).single(  "image");

// let fotoUploadMiddleware = util.promisify(upload);

// module.exports = fotoUploadMiddleware;