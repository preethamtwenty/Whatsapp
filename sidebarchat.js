import React from 'react';
import './sidebarchat.css';
import { Avatar , IconButton} from '@material-ui/core';

import Sidebar from './sidebar.js'
import {Link,useParams} from "react-router-dom";


const Sidebarchat=({addnewchat,name,id})=>{
    
    
    const Createchat=()=>{
      const roomname= prompt('START A CHAT');

     


    };
    

    


    return !addnewchat ?(
        <Link to= {'/rooms/'+id}> 
         
        <div className="sidebarchat">
        <div className="chathead">
        <Avatar src={window.location.origin +'/p.jpg'}/>

        <div className="sidebarchat_info">
        <h2>{name}</h2>
        <div className="sidebarchat_info2">
        last message
        </div>


        </div>

        
        </div>
        
      
        
        </div>
        
        
        </Link>

       
        
        
        
       


    ):(
        <div onClick={Createchat}>
        <div className="sidebarchat">
        <h2>Add new chat</h2>
        </div>
        
        </div>

    )
}
export default Sidebarchat;