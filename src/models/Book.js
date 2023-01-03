import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id:{type:String},
        tittle:{type:String, required: true},
        author:{type:String, required:true},
        editor:{type:String, required:true},
        pages_numbers:{type:Number}
    }   
);

const books = mongoose.model('books',bookSchema)

export default books