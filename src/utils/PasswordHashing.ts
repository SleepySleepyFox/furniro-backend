import  bcrypt from 'bcrypt'
const hashPassword = async (password : string) => {
    const saltRounds = 10
    
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

export default hashPassword
