import express from "express"
import books from "../models/Book.js"
import BooksRoutes from "./BooksRoutes.js"

const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({tittle: "Node Course"})
        
    })

    app.use(
        express.json(),
        books
    )
}

export default routes