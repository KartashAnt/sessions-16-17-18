import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>404: Page not found</h1>
            <button onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
}

export default Page404;
