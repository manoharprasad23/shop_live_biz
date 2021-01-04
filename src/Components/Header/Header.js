import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* header content */}
            <div className="shop-live">shop live</div>
            <img className="logo" src="https://www.turtlemint.com/wp-content/themes/turtlemint/assets/images/logo.svg" alt="logo"/>
            <div className="right-nav">
                <span className="order-status">Order Status</span>
                <span className="sign-in">Sign In</span>
                <span className="sign-up">Sign Up</span>
            </div>
        </div>
    )
}

export default Header
