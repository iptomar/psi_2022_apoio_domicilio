const express = require('express')
const cors = require('cors')


const app = express()

// middleware

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