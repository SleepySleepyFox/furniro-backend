import { RegisterService } from "../services/RegisterService"
import { UserData } from "../types/UserData"
import { Request, Response } from "express"

export const register = async (req: Request<{},{}, UserData>, res: Response) => {
    await RegisterService(req.body)
    await console.log(req.body)
}