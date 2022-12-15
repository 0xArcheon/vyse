import React from 'react';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Input, ConfigProvider } from 'antd';
import "./navbar.css";
const { Search } = Input;


function navbar() {
    return (
        <div className='nav-container'>
            <div className='navbar'>
                <div className='left'>
                    <div className='item'>
                        <img src='/images/logoDark.png' className='icon-img' alt='Vyse Logo'></img>
                        <Link to="/"></Link>
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
                        <Link to="/Products/1" className='category'>Categories</Link>
                    </div>
                    <FavoriteIcon fontSize='large' sx={{ color: "#524FBF" }} />
                    <AccountCircleIcon fontSize='large' sx={{ color: "#524FBF" }} />
                </div>
            </div>
        </div>

    )
}

export default navbar