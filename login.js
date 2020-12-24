import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import {actionTypes} from './reducer';
import {useStateValue} from './stateprovider';
import reducer from './reducer'; 



import './login.css';

const Login=()=>{
    
    const signin=()=>{
       


    };
    return(
        <div className="login">
        <div className="login_container">
        Login  with google
        <div className="login-button">
        <Button variant="contained" color="secondary" onClick={signin}>
        Google sign in
        </Button>
        
        </div>

        
        </div>
        </div>
    )
}
export default Login;