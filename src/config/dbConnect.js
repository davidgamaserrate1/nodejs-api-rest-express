import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://davidgamaserrate:123@cluster0.xf0bcqn.mongodb.net/alura-note");


let db = mongoose.connection ;

export default db;