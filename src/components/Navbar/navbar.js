import React from 'react';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Input, ConfigProvider } from 'antd';
import { useState } from 'react';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FaceIcon from '@mui/icons-material/Face';
import Logout from '@mui/icons-material/Logout';
import "./navbar.css";

const { Search } = Input;

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='nav-container'>
            <div className='navbar'>
                <div className='left'>
                    <div className='item'>
                        <Link to="/">
                            <img src='/images/logoDark.png' className='icon-img' alt='Vyse Logo'></img>
                        </Link>
                    </div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: '#524FBF',
                                },
                            },
                        }}
                    >
                        <div className="item">
                            <Search
                                placeholder="Search products"
                                allowClear
                                enterButton="Search"
                                size="large"
                            />
                        </div>
                    </ConfigProvider>

                </div>
                <div className='right'>
                    <div className="item">
                        <Link to="/Products/1" className='category'>Listings</Link>
                    </div>
                    <FavoriteIcon fontSize='large' sx={{ color: "#524FBF" }} />
                    <AccountCircleIcon
                        onClick={handleClick}
                        size="small"
                        sx={{ color: "#524FBF" }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        fontSize='large'
                    />
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <FaceIcon /> Profile
                </MenuItem>
                <MenuItem>
                    <BookmarkAddedIcon /> My Listings
                </MenuItem>
                <MenuItem>
                    <Logout /> Logout
                </MenuItem>
            </Menu>
        </div>

    )
}

export default Navbar