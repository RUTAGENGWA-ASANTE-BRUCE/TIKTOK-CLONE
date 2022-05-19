import Express from "express";
import Mongoose from "mongoose";
import Cors from "cors";
import InformationOfVideo from "./Data.js";

//App config
const app = Express()
const port = 5000
const connection_url = "mongodb://localhost/tiktok-clone"
//middlwares
app.use(Express.json())
app.use(Cors())

//db config
Mongoose.connect(connection_url)


//API endpoints
app.get("/", (req, res) => res.status(200).send("Hello world"))
app.post("/tiktok/posts", (req, res) =>
{
    const videoPost = req.body
    InformationOfVideo.create(videoPost, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})
app.get("/tiktok/posts", (req, res) =>
{

    InformationOfVideo.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(200).send(data) }
    })
})
//listener
app.listen(port, () => console.log(`Listening on port ${port}`))