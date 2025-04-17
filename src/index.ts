import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000

app.get("/", (req, res) => {
    res.send("Test")
})

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})