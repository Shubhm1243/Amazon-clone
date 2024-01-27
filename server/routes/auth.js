const express = require('express')

const authRouter = express()

authRouter.get('/', function (req, res) {
  res.json({
    name: "Shubham",
    age: 21,
    role: "Developer"
  })
})

module.exports = authRouter