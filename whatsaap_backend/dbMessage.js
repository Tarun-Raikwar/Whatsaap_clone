import mongoose from "mongoose";

const whatsaapSchema = mongoose.Schema({
    message: String,
    name: String, 
    timeStamp: String
})

export default mongoose.model('messagecontents', whatsaapSchema)