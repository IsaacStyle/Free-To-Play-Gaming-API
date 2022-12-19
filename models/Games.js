import mongoose from 'mongoose'

const GamesSchema = new mongoose.Schema({
    id: { 
    type: Number,
    required: false,
    },
    title: String,
    thumbnail: String,
    short_description: String,
    game_url: String,
    genre: String,
    platform: String,
    publisher: String,
    developer: String,
    release_date: String,
    freetogame_profile_url: String
})

export default mongoose.model('games', GamesSchema)