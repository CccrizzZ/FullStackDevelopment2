// import mongoose from "mongoose"
const mongoose = require('mongoose')


// schema
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

const collection = "ChatsTable"
const Chat = mongoose.model('EventsTable', ChatSchema, collection)
// module.exports = Chat
export default Chat