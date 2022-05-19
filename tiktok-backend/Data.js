import Mongoose from "mongoose"



const DataSchema = new Mongoose.Schema({
    channel: String,
    url: String,
    description: String,
    Likes: Number,
    Shares: Number,
    Messages: Number,
    songName: String

})
export default Mongoose.model("InformationOfVideo", DataSchema)