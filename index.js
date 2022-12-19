import mongoose from "mongoose"
import connection from "./connection.js"
import Games from "./models/Games.js"
import express from "express"

let app = express()
app.use(express.json());

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/', (req,res) => {
    Games.find().then(games => res.json(games))
})