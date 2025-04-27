import { RegisterService } from "../services/RegisterService"
import { UserData } from "../types/UserData"
import { Request, Response } from "express"
import validateEmail from "../utils/EmailValidation"

export const register = async (req: Request<{},{}, UserData>, res: Response) => {
    if(!validateEmail(req.body.Email)) {
        res.status(400).json({message: 'Invalid Email'})
    }else{
        await RegisterService(req.body)
        res.status(200)
    }
    // await console.log(req.body)
}