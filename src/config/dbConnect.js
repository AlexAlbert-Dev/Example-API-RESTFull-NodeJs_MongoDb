import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alex:105090@concessionaria.93grf7q.mongodb.net/");

let db = mongoose.connection;

export default db;


