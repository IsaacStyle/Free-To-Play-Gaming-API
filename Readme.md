# Free To Play Games API
The following is an API of Free to Play Video Games with full CRUD functionality.

Deployed Api - https://free-to-play-gaming-api-production.up.railway.app/
Retool Front End - https://isaacstyle.retool.com/embedded/public/d02a94ee-d6bf-4373-80dc-326c9d232675

## Getting Started
The dependencies required for this project are the following.

###### Mongoose
    npm install mongoose
Mongoose functions as the liason between your code and your personal database in Mongodb.
###### Express
    npm install express
Express provides us a way to build server functionality with JavaScript.
###### Node-Fetch
    npm install node-fetch
Node-Fetch provides you with a streamlined way to make fetch requests to online servers. In the case of this project, we use it to grab json data and store it in our database.
###### FS
    npm install fs
In this project, fs is used in conjunction with fetch in order to write our json data into a conveinient file.
###### Nodemon is also recommended to be used as a dev dependency
    npm install nodemon --save-dev
Nodemon allows us to have our server restart automatically to reflect changes in our code.

## How To Use
As stated above, this api allows for full CRUD (Get Post Put and Delete functions).
The entire games list can be requested with the default path of '/'.

##### Search for specific games by id or title
    '/id/:id-value'
    '/title/:title-name'
##### Search random games
    '/random'
    '/random10'
##### Search for a collection of games by specific attributes
    Search games by Genre '/genre/:genre-name' 
    Search Games by platform '/platform/:platform-name'
    Search games by publisher '/publisher/:publisher-name'
    Search games by developer '/developer/:developer-name'
##### Search for games through Query
    '/Games?<key>=<value>'
##### Post request by Id
    '/:id-value'
##### Put request by Id
    '/:id-value'
##### Delete request by Id
    '/:id-value'




