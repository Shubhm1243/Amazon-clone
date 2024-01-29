//IMPORTS FROM PACKAGES
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const DB = "me nai bataunga "

const PORT = 3000


//IMPORTS FROM OTHER FILES

const authRouter = require("./routes/auth");
// const e = require('express');


//MIDDLEWARE
app.use(express.json())
app.use(authRouter)     

//CONNECTIONS 

mongoose.connect(DB).then(() => {
  console.log("Connection Successful")
}).catch((e) => {
  console.log("Unsuccessful Connection")
})

//INIT


app.get('/', function (req, res) {
  res.send('Hello World, my name is shubham')
})




app.listen(PORT, "0.0.0.0" ,() => {
  console.log(`Connected at port ${PORT}`);
})
