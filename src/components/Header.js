import React from 'react';
import './Header.css'
import {Link } from 'react-router-dom';
import Logo from '../logo.svg'
import Search from './Search/Search';


const Header = () => {
    return(
 
    <div className="Header">
        <Link to="/">
    <img src={Logo} alt="logo" className="Header-logo" />
    </Link>
           <h3> Coin </h3>
       
        
           <Search  />
           </div>      

    );
}

export default Header;