import React, {useState,useEffect} from 'react';
import './chat.css';
import { Avatar , IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile'; 
import ChatIcon from '@material-ui/icons/Chat';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router';

import Sidebar from './sidebar';
import { useStateValue } from "./stateprovider";
import { actionTypes } from "./reducer";

const displayName = localStorage.getItem("displayName");



function Chat() {
    const[input,setinput]=useState("");
    const{ roomId }=useParams();
    const [roomName,setroomName]=useState("");
    const [{user} , dispatch]= useStateValue();
    const[messages,setmessages]=useState([]);
    

    const sendMessage=(e)=>{
        
    };
    
  
    return (
        
        <div className="chat">
        <div className="chat_header">
        <Avatar src={window.location.origin+'/p.jpg'}/>

        <div className="chatheader_info">
        <h3>{roomName}</h3>
        <p>Last seen at </p>
        
        </div>

        <div className="chatheader_right">
        <IconButton>
        <SearchOutlined/>
        
        </IconButton>

        <IconButton>
        <AttachFile/>
        
        </IconButton>

        <IconButton>
        <MoreVertIcon/>
        
        </IconButton>
        
        </div>

        
        </div>
        


        <div className="chat_body">
        {messages.map((message)=>(
        <div className={'chat_text ${true &&  "chat_receiver"}'}>
        <div className="chat_name ">
        {message.name}
        
        
        </div>
        {message.text}
        <span className="chat_time">
       
        </span>
        
        </div>

        ))}
       
        

        </div>

        <div className="chat_footer">
        <InsertEmoticonIcon/>
        <form>
        <input type="text" value={input} onChange={e=>setinput(e.target.value)} placeholder="Type your message"></input>
        <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <MicIcon/>




        </div>
        </div>

       





    )
        
}

export default Chat;
