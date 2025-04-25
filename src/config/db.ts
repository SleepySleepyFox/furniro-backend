import mongoose from "mongoose";
import 'dotenv/config'
import Users from "../models/UserSchemas";


export default async function db() {
    await mongoose.connect(process.env.MONGO_URL)
    .then(e => {
        console.log("connected to DB")
        // const usr = mongoose.model('testuser', Users)
        // const test = new usr({email: 'fdsfds', FirstName:'fsdfsd', password:'fdsfdsfs', SecondName:'fsdfds'})
        // test.save()
    })


}