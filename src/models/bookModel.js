const BooksList = require("../data/books")

    const findAll = () => {
        return BooksList
    }

    const create = (book) => {
        BooksList.push(book)

        return book
    }
    
    const findById = (id) => {
   return BooksList.find(book => book.id === id)     

   }

   const update = (id, data) => {
    const book = BooksList.find( book => book.id === id)

    if (!book ) return null

    if (data.title){
            book.title = data.title
    }
    return book
   
    if (!book ) return null

    if (data.author){
            book.author = data.author
    }
    return book

} 

   const remove = (id) => {
    const index = BooksList.findIndex (user => user.id === id)

    const deleted = BooksList[index]

    BooksList.splice(index, 1)

    if  (index === -1) return null

    return deleted  

   }

module.exports = {
        findAll,
        create,
        findById,
        update,
        remove
    }
