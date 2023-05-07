import React, { useState } from 'react';


const loggedStyle={
    color:'blue'
}

const unloggedStyle={
    color:'tomato',
    fontWeight:'bold '
}

const gretingUser=(name)=>(<p>Hello, {name}</p>);

const askForLogin=()=> (<p>Please, Login</p>);


const GreetingStyled = (props) => {

const [logged, setLogged] = useState(false);

    return (
        <div style={logged?loggedStyle:unloggedStyle}>
            {logged? gretingUser(props.name):askForLogin()}
            
            <button onClick={()=>{
                console.log("Button pressed");
                setLogged(!logged)
            }}>
                {logged?"Logout":"Login"}
            </button>
        </div>

    );
}

export default GreetingStyled;
