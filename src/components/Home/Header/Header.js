import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import banner from '../../../images/header-banner.png';

const Header = () => {
    return (
        <div className="header-bg">
            <Navbar></Navbar>
            <div className="row d-flex align-items-center">
                <div className="col-md-5 offset-md-1">
                    <h1 className="heading">Small <span>Ideas</span> Can <br/> Grow Into Big <br/> Realities</h1>
                    <button className="btn btn-brand">GET STARTED</button>
                </div>
                <div className="col-md-6">
                    <img src={banner} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Header;