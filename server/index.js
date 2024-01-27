//IMPORTS FROM PACKAGES
const express = require('express')
const app = express()


//IMPORTS FROM OTHER FILES

const authRouter = require("./routes/auth");
app.use(authRouter)     //MIDDLEWARE



//INIT


app.get('/index', function (req, res) {
  res.send('Hello World, my name is shubham')
})



const PORT = 3000


app.listen(PORT, () => {
  console.log(`Connected at port ${PORT}`);
})