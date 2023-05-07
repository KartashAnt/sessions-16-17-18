import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const location=useLocation();
    const navigate=useNavigate();
    console.log("We are in Route:",location.pathname);
    
    return (
        <div>
            <h1>About | FAQs page</h1>
            <div>
                <button onClick={()=>navigate('/')}>Go to Home</button>
                <button onClick={()=>navigate(-1)}>Go Back</button>
                <button onClick={()=>navigate(1)}>Go Forward</button>
            </div>
        </div>
    );
}

export default AboutPage;
