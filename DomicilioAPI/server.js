const express = require('express')
const cors = require('cors')


const app = express()

// middleware

global.__basedir = __dirname;

var corsConfig = {
  origin: "http://localhost:8080"
};

app.use(cors(corsConfig));

const evokeRoutes = require("./routes/upload.route");

app.use(express.urlencoded({ 
  extended: true 
}));

evokeRoutes(app);


//app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//app.use(function(_req,res){
  //res.header('Access-Control-Allow-Origin')
//})
// routers
  // user routers
const router = require('./routes/userRouter.js')
app.use('/api/users', router)
  // utente routers
const router1 = require('./routes/utenteRouter.js')
app.use('/api/utentes', router1)


//static Images Folder

app.use('/Images', express.static('./Images'))

//port

const PORT = process.env.PORT || 8080


//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// Handle error
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Error occured'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});// Handle error
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Error occured'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});