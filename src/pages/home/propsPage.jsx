import React from 'react';
import { useLocation } from 'react-router-dom';

const PropsPage = () => {
    const location=useLocation();
    return (
        <div>
            <h1> You are {location.state.online? "online":"offline"}</h1>
            <h2> Your searc contains {location.search}</h2>
        </div>

    );
}

export default PropsPage;
