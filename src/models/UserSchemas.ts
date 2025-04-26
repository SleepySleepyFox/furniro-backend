import mongoose, { Mongoose } from "mongoose";

const UserSchema = new mongoose.Schema({
    FirstName: String,
    SecondName: String,
    Email : String,
    Password: String
})

const User = mongoose.model('Users', UserSchema)

export default User