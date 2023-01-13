import mongoose from "mongoose"
import connection from "./connection.js"
import Games from "./models/Games.js"
import express from "express"
import routes from "./Routes/router.js"
import cors from 'cors'

const PORT = process.env.PORT || 3000
let app = express()

app.use(express.json())
app.use('/', routes)
app.use(cors())

connection.on("connected", () => {
    console.clear()
    console.log("Connected To MongoDB!")
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})