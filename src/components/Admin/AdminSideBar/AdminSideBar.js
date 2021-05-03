import React, { useContext } from 'react';
import './AdminSideBar.css';
import logo4 from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminSideBar = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext) 
    return (
        <div className="col-md-3 admin-sidebar">
            <div>
                <Link to="/"><img src={logo4} alt=""/></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-clipboard-list"></i>
                <Link to="/order-list" className="admin-link"><p>Order List</p></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-plus"></i>
                <Link to="/add-service" className="admin-link"><p>Add Service</p></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-user-plus"></i>
                <Link to="/make-admin" className="admin-link"><p>Make Admin</p></Link>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-th-large"></i>
                <Link to="/manage-services" className="admin-link"><p>Manage Services</p></Link>
            </div>
            <h5 className="text-white">Admin: {loggedInUser.name}</h5>
        </div>
    );
};

export default AdminSideBar;