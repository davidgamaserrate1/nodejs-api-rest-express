import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";

db.on("error", console.log.bind(console,'Connection error'))
db.once("open", ()=>{
  console.log("Conected with sucess!")
})

const app = express();

app.use(express.json())

// const books = 
// [
//   {
//     id: 1,
//     "title": "Clean Code"
//     },
//   {
//     id: 2, 
//     "title": "The Last Of Us"
//   },
// ]

app.get('/', ( req, res) => {  
  res.status(200).send('Node Course');
}) 

app.get('/books', (req, res) => {
  books.find((err,books)=>{
    res.status(200).json(books)
  })
  
  
})

app.get('/books/:id',(req,res) =>{
    let index = getBook(req.params.id);   

    res.json(books[index])

})

 
app.post('/books', (req,res) => {
  books.push(req.body);
  res.status(201).send('Book Registred!');
})

app.put('/books/:id',(req,res) =>{
    let index = getBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).send(books)
})

app.delete('/books/:id',(req,res) =>{
    let {id} = req.params;
    let index = getBook(id);
    books.splice(index,1)
    res.status(200).send(`Book ${id} removed with sucess!`)
})


function getBook(id) {
    return books.findIndex(livro => livro.id ==id );
}


export default app