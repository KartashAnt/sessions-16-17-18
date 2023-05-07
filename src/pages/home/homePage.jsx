import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <div>
                <button onClick={()=>navigate('/profile')}>Go to Profile</button>
                <button onClick={()=>navigate('/demoProps?searcParam=true',{
                    state:{
                        online:Math.random()<0.5
                    }
                })}>Check Props page</button>
            </div>
        </div>
    );
}

export default HomePage;
