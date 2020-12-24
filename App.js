import React, { Component } from 'react';

import './App.css';
import Sidebar from './sidebar.js';
import Chat from './chat.js';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './login';

import  {useState,useEffect} from 'react';
import {useStateValue} from './stateprovider';


function App(){

  

  return(
  <div className="app">
  
      <div className="app_body">
      <Router>
     
      <Sidebar/>
      
      <Switch>
      <Route path="">
      <Chat/>
      </Route>
      </Switch>
      </Router>
      </div>
      
      
    
    )
    
  
  </div>
  )

  

}


export default App;
