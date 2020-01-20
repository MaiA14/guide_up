
import { NavLink, Link } from 'react-router-dom';
import React from 'react';

export default function Navbar(props) {

    return <div className="main-navbar">
        <Link to="/home" > <div className="flex logo">

            <img src="https://i.ibb.co/8BxPMdT/logo.png" alt="logo"></img>
            <div className="logo-text">Local Guide</div>
        </div></Link>
        <div>
         
        </div>
        <div className=" nav-links">
            <div className="nav-link"><NavLink activeClassName="active" to='/home'>Home</NavLink></div>
            <div className="nav-link"><NavLink activeClassName="active" to='/login'>Login</NavLink></div>
            <div className="nav-link"><NavLink activeClassName="active" to='/join_us'>Become a guide</NavLink></div>
        </div>
    </div>

}