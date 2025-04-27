import { RegisterService } from "../services/RegisterService"
import { UserData } from "../types/UserData"
import { Request, Response } from "express"
import validateEmail from "../utils/EmailValidation"
import hashPassword from "../utils/PasswordHashing"

export const register = async (req: Request<{},{}, UserData>, res: Response) => {
    if(!validateEmail(req.body.Email)) {
        res.status(400).json({message: 'Invalid Email'})
    }else{
        const passwordHash = await hashPassword(req.body.Password)
        const data: UserData = {
            FirstName: req.body.FirstName,
            SecondName: req.body.SecondName,
            Email: req.body.Email,
            Password: passwordHash
        }
        await RegisterService(data)
    }
}