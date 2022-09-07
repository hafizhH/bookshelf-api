const router = require('express').Router()
const bookController = require('../controllers/bookController.js')

router.get('/', bookController.getAllBooks)

router.get('/:id', bookController.getBookById)

router.post('/', bookController.addNewBook)

router.put('/:id', bookController.updateBookById)

router.delete('/:id', bookController.deleteBookById)

module.exports = router