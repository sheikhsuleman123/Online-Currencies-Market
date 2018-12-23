import React from 'react';
import './Header.css'

import Logo from '../logo.svg'


const Header = () => {
    return(
        <div className="Header">
        
    <img src={Logo} alt="logo" className="Header-logo" />
           <h3> Coin </h3>
        </div>
    );
}

export default Header;