import { Link, Typography } from '@mui/material';
import React from 'react';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright (c) '}
            <Link color={"inherit"} href='https://imaginaformacion.com'>
                Imagina Formacion
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    );
}

export default Copyright;
