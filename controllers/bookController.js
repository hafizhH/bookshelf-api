const Books = require('../models/bookModel')

const getAllBooks = async (req, res, next) => {
  try {
    const bookList = await Books.find({})
    return res.status(200).json({ data: bookList })
  } catch(err) {
    next(err)
  }
}

const getBookById = async (req, res, next) => {
  try {
    const id = req.params.id
    const book = await Books.findById(id)
    return res.status(200).json({ data: book })
  } catch(err) {
    next(err)
  }
}

const addNewBook = (req, res, next) => {
  try {
    const book = new Books({
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      description: req.body.description,
      year: req.body.year
    })

    book.save(function (err, result) {
      if (err) {
        console.log(err)
        return
      }
      res.status(200).json({ message: 'Success' })
    })
  } catch (err) {
    next(err)
  }
}

const updateBookById = async (req, res, next) => {
  try {
    const id = req.params.id
    const book = {
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      description: req.body.description,
      year: req.body.year
    }
    await Books.findByIdAndUpdate(id, book)
    return res.status(200).json({ message: 'Success' })
  } catch(err) {
    next(err)
  }
}

const deleteBookById = async (req, res, next) => {
  try {
    const id = req.params.id
    await Books.findByIdAndDelete(id)
    return res.status(200).json({ message: 'Success' })
  } catch(err) {
    next(err)
  }
}

module.exports = { getAllBooks, getBookById, addNewBook, updateBookById, deleteBookById }