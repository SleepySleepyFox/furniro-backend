import express from "express"
import cors from "cors"
import userRoutes from "./routes/UserRoutes"
import db from "./config/db"

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
db()
app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`)
})

app.use('/api/', userRoutes)



