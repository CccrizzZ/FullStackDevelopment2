const mongoose = require("mongoose")
const express = require("express")
// const cors = require("cors")

// local host mongodb connecting string including which db to connect
const connectionString = "mongodb://localhost:27017/admin"   // connecting to admin db

// connect to mongo db
mongoose.connect(connectionString, { useNewUrlParser: true})
.then(
  () => {console.log("Mongoose connected successfully")},                // connected
  err => {console.log("Mongoose could not connect to database" + err)} // econnection error
  )
  

// create express app
const app = express()
// app.use(cors())

// routes
app.get("/", (req, res) => {
  // res.render("index")
})

// listen on port 8080
const hostname = "localhost"
const port = 8080

// create server
const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})




// create socket.io
const io = require("socket.io")(server, {
  // origins: "*",
  transport: ['websocket']
  // methods: [ "GET", "POST"],
  // credentials: true
})


// socket io event
io.on('connection', (socket) => {
  // run everytime  client connect (connection event)
  console.log('client connected: ' + socket.id)

})

