import books from "../models/Book.js";

class BookController {

    static listAllBooks = (req, res)=>{
        books.find((err,books)=>{
            res.status(200).json(books)
        })
    }

}
export default BookController