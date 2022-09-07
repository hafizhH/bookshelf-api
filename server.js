const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const server = express()

const router = require('./routes.js')
require('dotenv').config()

const PORT = 5000

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    throw err
    return
  }
  console.log('Terhubung dengan MongoDB')
})

server.use(bodyParser.json())
server.use(router)

server.listen(PORT, () => {
  console.log('Server berjalan pada port ' + PORT)
})