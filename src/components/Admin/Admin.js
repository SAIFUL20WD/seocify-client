import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminSideBar from './AdminSideBar/AdminSideBar';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect( () => {
        fetch('https://secret-forest-02226.herokuapp.com/isAdmin', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser.email])

    return (
        <div>
            { 
                isAdmin ? <AdminSideBar></AdminSideBar> 
                    :   <h2 className="text-center text-danger">Sorry! This Page is Only For Admins</h2>
            }
        </div>
    );
};

export default Admin;