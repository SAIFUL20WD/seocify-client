import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = () => {

    return (
        <nav className="container">
            <div>
                <Link to="/" className="link"><img src={logo} alt="" className="logo" /></Link>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/projects" className="link">Projects</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                    <li><Link to="/dashboard" className="link">Dashboard</Link></li>
                    <li><Link to="/admin" className="link">Admin</Link></li>
                    <li><Link to="/login" className="link login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;