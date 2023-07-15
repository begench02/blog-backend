import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {
    versionKey: false
})

export const Admin = mongoose.model('Admin', AdminSchema)
