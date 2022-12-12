import React from 'react';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./navbar.css";

function navbar() {
    return (
        <div className='nav-container'>
            <div className='navbar'>
                <div className='left'>
                    <div className='item'>
                        <img src='/images/logoDark.png' className='icon-img'></img>
                        <Link to="/"></Link>
                    </div>
                    <div className="item">
                        <Link to="/Products/1" className='category'>Categories</Link>
                    </div>
                    <div className="item">
                        <TextField id="outlined-basic" size='small' label="Search Product" variant="outlined" />
                    </div>
                    <div className="item">
                        <SearchTwoToneIcon sx={{ color: "#524FBF" }} />
                    </div>
                </div>
                <div className='right'>
                    <FavoriteIcon sx={{ color: "#524FBF" }} />
                    <AccountCircleIcon sx={{ color: "#524FBF" }} />
                </div>
            </div>
        </div>

    )
}

export default navbar