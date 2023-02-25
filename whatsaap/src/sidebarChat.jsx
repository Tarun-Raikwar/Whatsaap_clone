import React from 'react'
import Avatar from '@mui/material/Avatar';
import './sidebarChat.css'

function SidebarChat(){
    return(
        <div className='sidebarChat'>
            <Avatar/>
            <div className="info">
                <p className='room'>Room Name</p>
                <p className='description'>Hey there I am using whatsaap</p>
            </div>
        </div>
    );
}

export default SidebarChat