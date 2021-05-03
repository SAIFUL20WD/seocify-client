import React, { useContext } from 'react';
import './DashBoardSidebar.css';
import logo3 from '../../../images/logo-2.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const DashBoardSideBar = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext)
    return (
        <div className="col-md-3 dashboard-sidebar">
            <div>
                <Link to="/"><img src={logo3} alt=""/></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-shopping-cart"></i>
                <Link to="/checkout" className="dashboard-link"><p>Checkout</p></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="far fa-list-alt"></i>
                <Link to="/orders" className="dashboard-link"><p>Services</p></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="far fa-comment-alt"></i>
                <Link to="/review" className="dashboard-link"><p>Review</p></Link>
            </div>
            <h5 className="text-white">User: {loggedInUser.name}</h5>
        </div>
    );
};

export default DashBoardSideBar;