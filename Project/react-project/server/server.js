const mongoose = require("mongoose")
const express = require("express")
const app = express()


// local host mongodb connecting string including which db to connect
const connectionString = "mongodb://localhost:27017/admin"   // connecting to admin db

// connect to mongo db
mongoose.connect(connectionString, { useNewUrlParser: true})
.then(
  () => {console.log("Mongoose connected successfully")},                // connected
  err => {console.log("Mongoose could not connect to database" + err)} // econnection error
)
  


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
  origins: "http://localhost:3000",
  methods: [ "GET", "POST"],
  // transports: ['websocket', 'polling'],
})


// socket io event
io.on('connection', (socket) => {
  // run everytime  client connect (connection event)
  console.log('client connected: ' + socket.id)

})



// create server
// const server = http.createServer(function(req, res) {
//   var path = url.parse(req.url).pathname
//   switch (path) {
//     case "/":
//       console.log("Home");
//     break

//     default:
//       send404(res)
//   }
// })

// 404 feedback
// const send404 = function(res) {
//   res.writeHead(404)
//   res.write("404")
//   res.end()
// }

// const expApp = new app()
// const server = http.createServer(expApp)


// // create socket io server
// const ioServer = new io.Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     credentials: true
//   }
// })


// // on connection function
// ioServer.on("Connection", (socket) => {
//   console.log(" User Connected ")
//   console.log(socket.name)
// })



// // listen to port 
// const PORT = 8080
// server.listen(PORT, () => console.log(`server started on localhost:${PORT}`))



