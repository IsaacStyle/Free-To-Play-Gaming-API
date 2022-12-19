import mongoose from "mongoose"
import connection from "../connection.js"
import Games from "../models/Games.js"
import data from "./games.json" assert {type:'json'}

let updatedData = data.map(item => {
    let gData = {}
    gData.title = item.title, 
    gData.thumbnail = item.thumbnail, 
    gData.short_description = item.short_description, 
    gData.game_url = item.game_url, 
    gData.genre = item.genre, 
    gData.platform = item.platform, 
    gData.publisher = item.publisher, 
    gData.developer = item.developer, 
    gData.release_date = item.release_date, 
    gData.freetogame_profile_url = item.freetogame_profile_url

    return gData

})

Games
    .deleteMany()
    .then(() => Games.create(updatedData))
    .then(() => console.log('Games added to database'))
    .catch(err => console.error("Failed", err))
    .then(() => mongoose.disconnect())