import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    const signInHandler = () => {
        alert('sign in handler...');
    }

    const signUpHandler = () => {
        alert('sign up handler...');
    }
    
    return (
        <div className="header">
            <div className="shop-live">shop live</div>
            <img className="logo" src="https://www.turtlemint.com/wp-content/themes/turtlemint/assets/images/logo.svg" alt="logo"/>
            <div className="right-nav">
                <span className="order-status">
                <Link to="/seller">Order Status</Link>
                </span>
                <span className="sign-in" onClick={() => signInHandler()}>Sign In</span>
                <span className="sign-up" onClick={() => signUpHandler()}>Sign Up</span>
            </div>
        </div>
    )
}

export default Header
