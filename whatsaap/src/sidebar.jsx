import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { SearchOutlined } from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SidebarChat from './sidebarChat';

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='sidebar_header_left'>
                    <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                </div>
                <div className='sidebar_header_right'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='sidebar_search_container'>
                <div className='sidebar_search'>
                    <SearchOutlined/>
                    <input type="text" placeholder='search'/>
                </div>
                <IconButton>
                    <FilterListIcon/>
                </IconButton>
            </div>

            <div className='sidebar_chat'>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
}

export default Sidebar;