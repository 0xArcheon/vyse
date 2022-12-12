import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css";

function footer() {
    return (
        <div className='footer'>
            <div className="left">
                <div className="item">
                    <img src='/images/logoLight.png' className='icon-img'></img>
                </div>
                <div className="item">
                    <span>Vyse is a peer to peer marketplace for buying and selling used goods</span>
                </div>
            </div>
            <div className="right">
                <div className="links">
                    <div>
                        <Link to="#">Contact Us</Link>
                    </div>
                    <div>
                        <Link to="#">Guides</Link>
                    </div>
                </div>
                <div className="copyright">
                    <span>© Vyse marketplace, 2022</span>
                </div>

            </div>
        </div>
    )
}

export default footer