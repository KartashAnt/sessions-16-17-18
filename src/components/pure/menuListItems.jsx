import { Home, ListAlt, QuestionMark, Settings } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const getIcon=(icon)=>{
    switch (icon) {
        case "HOME":
            return(<Home></Home>)
        case "TASKS":
            return(<ListAlt></ListAlt>)
        case "SETTINGS":
            return(<Settings></Settings>)
        default:
            return(<QuestionMark></QuestionMark>)
    }
}

const MenuListItems = ({list}) => {
    const navigate=useNavigate();
    return (
        <List>
            {
                list.map(({text,path,icon},index)=>(
                    <ListItem key={index} button onClick={()=>navigate(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))
            }
        </List>
    );
}

export default MenuListItems;
