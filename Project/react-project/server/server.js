const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

// chat schema
const ChatSchema = new mongoose.Schema({
  ID: {
      type: String,
      required: true
  },
  Date: {
      type: String,
      required: true
  },
  Time: {
      type: String,
      required: true
  },
  Sender: {
      type: String,
      required: true
  },
  Receiver: {
      type: String,
      required: true
  },
  Message: {
      type: String,
      required: true
  },
  Room: {
      type: String,
      required: true
  }
})

const collection1 = "ChatsTable"
const ChatTable = mongoose.model('ChatsTable', ChatSchema, collection1)

// event schema
const EventSchema = new mongoose.Schema({
  Type: {
      type: String,
      required: true
  },
  Date: {
      type: String,
      required: true
  },
  Time: {
      type: String,
      required: true
  },
  User: {
      type: String,
      required: true
  },
  EventID: {
      type: String,
      required: true
  },
  PPID: {
      type: String,
      required: true
  }
})

const collection2 = "EventsTable"
const EventTable = mongoose.model('EventsTable', EventSchema, collection2)






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
app.use(cors())

// routes
app.get("/event", (req, res) => {

  console.log("event history")

  // send the db to the client
  EventTable.find({}, (err, table) => {
    res.send(table)
  })

})

app.get("/chat", (req, res) => {

  console.log("chat history")

  // send the db to the client
  ChatTable.find({}, (err, table) => {
    res.send(table)
  })
})


// listen on port 8080
const hostname = "localhost"
const port = 8080

// create server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

