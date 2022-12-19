import mongoose from "mongoose"
import connection from "./connection.js"
import Games from "./models/Games.js"
import express from "express"
import routes from "./Routes/router.js";

let app = express()
app.use(express.json());
app.use('/', routes);

connection.on("connected", () => {
    console.clear()
    console.log("Connected To Mongodb!")
    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
});