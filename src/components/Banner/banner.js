import React from 'react';
import { Button, ConfigProvider } from 'antd';
import './banner.css';
function banner() {
    return (
        <div className="banner">
            <div className="left">
                <h1>
                    Buy, Sell or Trade your goods <br /> with Zero fees
                </h1>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: '#262171',
                            },
                        },
                    }}
                >
                    <Button type="primary" size='large' shape='round' >Sell now</Button>
                </ConfigProvider>

            </div>
            <div className="right">
                <div>
                    <img src='/images/BannerImg.png' alt='eCommerce Illustrsation'></img>
                </div>
            </div>
        </div>
    )
}

export default banner