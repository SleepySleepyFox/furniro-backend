import mongoose, { Mongoose } from "mongoose";

const Users = new mongoose.Schema({
    email : String,
    password: String,
    FirstName: String,
    SecondName: String
})

export default Users