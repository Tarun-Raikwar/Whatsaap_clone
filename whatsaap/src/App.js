import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import {useEffect, useState} from 'react';
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/message/sync").then((response) => {
        setMessages(response.data)
      });
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('a3b49ec244217aad2bda', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      console.log(newMessage);
      setMessages([...messages, newMessage]);
    });

    console.log(messages);

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  return (
    <div className="App">
      <div className='App_body'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
