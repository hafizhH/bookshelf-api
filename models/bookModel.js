const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: 'String'
    },
    author: {
      type: 'String'
    },
    description: {
      type: 'String'
    },
    publisher: {
      type: 'String'
    },
    year: {
      type: 'Number'
    }
  }
)

module.exports = mongoose.model('Books', bookSchema)