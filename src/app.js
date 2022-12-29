import express from "express";

const app = express();

app.use(express.json())

const books = [
  {id: 1, "title": "Celan Code"},
  {id: 2, "titulo": "The Last Of Us"}
]

app.get('/', (req, res) => {
  res.status(200).send('Node Course');
}) 

app.get('/books', (req, res) => {
  res.status(200).json(books)
})
 

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app