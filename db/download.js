import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79c6184155msh3827c7ca4873539p1912b7jsndb82d3ad4c5d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
}

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games',options)
    .then(response => response.json())
    .then(data => fsPromises.writeFile("./db/games.json",JSON.stringify(data)))
    .catch(error => console.error("Caught u lackin!", error))





