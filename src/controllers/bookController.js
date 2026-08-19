const BooksList = require("../data/books")
const bookModel = require("../models/bookModel")

function getAllBooks(request, response) {
    const books = bookModel.findAll()

    return response.json(BooksList)
}

function createBook( req, res ) {
     const { title, author } = req.body
    
    const newBook = {
        id: Date.now(),
        title: title,
        author
    }

    const createdBook = bookModel.create(newBook)

    return res.status(201).json(createdBook)
}

const getBookById = (req, res) => {
    const id = Number(req.params.id)

    const book = bookModel.findById(id)

    if(!book) {
        return res.status(404).json({
            message: "Livro não encontrado"
        })
    }

    return res.json(book)
}

const updateBook = (req, res) => {
    const id = Number(req.params.id)

    const { name } = req.body

    const newData = {
        name: name
    }

    const updatedBook = bookModel.update(id, newData)

    if(!updatedBook) {
        return res.status(404).json({
            message: "Livro não encontrado"
        })
    }

    return res.json(updatedBook)
}

const deleteBook = (req, res) => {
    const id = Number(req.params.id)

    const deletedBook = bookModel.remove(id)

    if(!deletedBook) {
        return res.status(404).json({
            message: "Livro não encontrado"
        })
    }

    return res.json({
        message: "Livro removido"
    })
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}