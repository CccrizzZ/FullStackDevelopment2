import mongoose from "mongoose"

// order schema
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

const collection = "EventsTable"
const Event = mongoose.model('EventsTable', EventSchema, collection)
// module.exports = Event
export default Event