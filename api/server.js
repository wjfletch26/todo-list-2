// bring in the module express - we use this for our server
const express = require('express')

// so express can navigate our files
const path = require("path")

// for cross-origin requests, we need the cors package
// https://www.npmjs.com/package/cors
const cors = require('cors')

// use mongoose middleware to create a database, models (schemas), and do all of our CRUD methods: Create, Read, Update, Delete
// Docs:  https://mongoosejs.com/docs/index.html
const mongoose = require('mongoose')

// initialize the express server in our app 
const app = express()

// tell express that we want our app in json format
app.use(express.json())

// serve responses in static files
// we also need the "path" module so express can navigate our files
app.use(
    express.static(path.join(__dirname, "../client/build"))
)

// make our app CORS enabled (Cross-origin resource sharing)
// (important for making api requests that come from other domains - like connecting to MongoAtlas, etc.)
// basically this allows ANYONE to access this API (unless we add restrictions)
app.use(cors())

// connect mongoose database
mongoose.connect("mongodb+srv://jaysquared:NalaDog2023@cluster0.cgl8xjv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(console.error)


// API ROUTES  ------------------------------------------------------------------------------

// TODO: Add in express routes for getting all todos, creating a todo, deleting a todo, and completing a todo

// GET all todos


// CREATE a new todo


// DELETE a todo


// UPDATE (or complete) a todo




// tell the server to listen on port 5000
app.listen(5000, () => {
    console.log(`Example app listening on 5000`)
})