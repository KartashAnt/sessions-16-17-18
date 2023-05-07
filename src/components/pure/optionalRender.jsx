import React, { useState } from 'react';

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <div>
            <button onClick={loginAction} style={propStyle}>Login</button>
        </div>
    );
}

const LogoutButon= ({logoutAction,propStyle}) => {
    return (
        <button onClick={logoutAction} style={propStyle}>Logout</button>
    );
}

let red=0;
let green=200;
let blue=150;


const loggedStyle={
    backgroundColor:"tomato",
    color:"white",
    fontWeight:"bold"
}
const unloggedStyle={
    backgroundColor:`rgb(${red},${green},${blue})`,
    color:"white",
    fontWeight:"bold"
}

const OptionalRender = () => {
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);
    /*const updateAccess=()=>{
        setAccess(!access);
    }*/
    const loginAction=()=>{
        setAccess(true);
    }
    const logoutAction=()=>{
        setAccess(false);
    }
    let optionalButton;
    /*
    if(access){
        
    }
    else{
        
    }*/
    const addMessages=()=>{
        setNMessages(nMessages+1)
    }
    if(access){
        optionalButton=<LogoutButon propStyle={loggedStyle} logoutAction={logoutAction}></LogoutButon>
    }
    else{
        optionalButton=<LoginButton propStyle={unloggedStyle} loginAction={loginAction}></LoginButton>
    }
    return (
        // <div style={access?loggedStyle:unloggedStyle}>
        <div>
            { optionalButton }
            {access && <div>{(nMessages>0 && <p> You have {nMessages} new message</p>) || <p>There are no new messages</p>}
            {nMessages>0 ? <p> You have {nMessages} new message</p> : <p>There are no new messages</p>}
            <button onClick={addMessages}>Add message</button></div>}
            
        </div>
    );
}

export default OptionalRender;
