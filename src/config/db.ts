import mongoose from "mongoose";
import 'dotenv/config'
import Users from "../models/UserSchemas";


export default async function db() {
    await mongoose.connect(process.env.MONGO_URL)
    .then(e => {
        console.log("connected to DB")
    })
}