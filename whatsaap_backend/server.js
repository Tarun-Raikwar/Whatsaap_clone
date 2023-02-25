//importing
import express from "express";
import mongoose from "mongoose";
import Messages from './dbMessage.js';
import Pusher from "pusher";
import cors from "cors";

//config app
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 9000
const connection_url = "mongodb+srv://tarun:QHwb5KLq2K0LPWfd@cluster0.dykju51.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const pusher = new Pusher({
    appId: "1546116",
    key: "a3b49ec244217aad2bda",
    secret: "64363b19861e1611ae2b",
    cluster: "ap2",
    useTLS: true
});

db.once('open', ()=>{
    console.log("connected successfully");
    const messageCollection = db.collection('messagecontents');
    const changeStream = messageCollection.watch();
    changeStream.on('change', (change)=>{
        // console.log(change);
        if(change.operationType === "insert"){
            const messageDetail = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetail.name,
                message: messageDetail.message
            });
        }
        else console.log("Error in triggring pusher");
    })
})

//api route
app.get('/', (req, res)=>res.status(200).send("hello world"));

app.post('/message/new', (req, res)=>{
    const dbmessage = req.body;
    console.log(dbmessage)
    Messages.create(dbmessage, (err, data)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    })
});

app.get('/message/sync', (req, res)=>{
    Messages.find((err, data)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    })
});

//listner
app.listen(port, ()=>console.log(`Listining at port : ${port}`));