const router = require('express').Router()
const userRoutes = require('./routes/userRoutes.js')
const bookRoutes = require('./routes/bookRoutes.js')

//router.use('/users', userRoutes)

router.use('/books', bookRoutes)

module.exports = router