import React,{useState,useEffect} from  'react';
import './sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar , IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/Search';


import Sidebarchat from './sidebarchat';
import {useStateValue} from './stateprovider';


const Sidebar=()=>{
    
    const [rooms,setrooms]=useState([]);
    
   



    return(
        <div className="sidebar">
        
       
        

        
        <div className="sidebar_header">

      
        <Avatar src='' ></Avatar>
   

      
        
        <div className="sidebar_headerRight">
        <IconButton>
        <DonutLargeIcon/>
        </IconButton>
        <IconButton>
        <ChatIcon/>
        </IconButton>
        <IconButton>

        <MoreVertIcon/>


        </IconButton>
        
        
        
        </div>

        </div>
        <div className="sidebar_search">
        <div className="sidebar_search_container">
        <SearchOutlined/>
        <input placeholder="Search for chats,contacts" type="text"></input>
        </div>
        </div>


        <div className="sidebar_chats">
        <Sidebarchat addnewchat/>
        {rooms.map(room=>(
            <Sidebarchat key={room.id} id={room.id} name={room.data.name}/>
        ))}

        </div>



        </div>
    )
        


    
}

export default Sidebar;