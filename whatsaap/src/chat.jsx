import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import './chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios";

function Chat({messages}){
    const [input, setInput] = useState("");

    const sendMessage = async(e) =>{
        e.preventDefault();
        console.log("tarun");
        await axios.post("/message/new", {
            name: "Tarun",
            message: input,
            timeStamp: "5:00 pm"
        });

        setInput("");
    };

    return(
        <div className='chat'>
            <div className='chat_header'>
                <Avatar/>
                <div className="chat_header_info">
                    <p className='room_name'>Room Name</p>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                {messages.map((message) =>(
                    <p className='chat_message'>
                        <span className='name'>{message.name}</span>
                        {message.message}
                        <span className='time_stamp'>{message.timeStamp}</span>
                    </p>
                ))}
            </div>

            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type message here'/>
                    <button onClick={sendMessage} type="submit">submit</button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;