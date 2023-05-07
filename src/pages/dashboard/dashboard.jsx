import { Button } from '@mui/material';
import React from 'react';
import Copyright from '../../components/pure/copyright';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({setCredentials}) => {
    const navigate=useNavigate();
    const logout=()=>{
        sessionStorage.removeItem('credentials');
        setCredentials(null);
    }

    return (
        <div>
            <Button variant='contained' onClick={logout}>Log Out</Button>
            <Button variant='contained' onClick={()=>navigate('/tasks')}>Open Tasks</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default Dashboard;
