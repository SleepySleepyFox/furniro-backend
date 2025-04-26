import mongoose from "mongoose";
import { UserData } from "../types/UserData";
import User from "../models/UserSchemas";

export const RegisterService = async (UserData : UserData) => {
    const addUser = new User(UserData)
    return await addUser.save()
}