import { z } from "zod"

const emailSchema = z.string().email();

const validateEmail = (email : string) => {
    try{
       const result = emailSchema.parse(email)
       return result
    }catch(err){
        console.log('email validation error: ', err)
    }
}

export default validateEmail