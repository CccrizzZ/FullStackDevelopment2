import mongoose from "mongoose"


const AdminSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

const collection = "Admin"
const Admin = mongoose.model('Admin', AdminSchema, collection)
export default Admin