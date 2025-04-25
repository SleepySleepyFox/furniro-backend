import express from "express"
import cors from "cors"
import db from "./config/Db"

const app = express()
const PORT = 5000

app.get("/", (req, res) => {
    res.send("Test")
})

const startServer = () => {
    db()
    app.use(cors())
    app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
}

startServer()
