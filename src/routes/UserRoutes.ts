import express from "express"
import { register } from "../controllers/RegisterController"

const router = express.Router()

router.post('/register', register)

export default router