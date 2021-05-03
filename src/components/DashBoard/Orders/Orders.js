import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashBoardSideBar from '../DashBoardSideBar/DashBoardSideBar';

const Orders = () => {
    const [orderedService, setOrderedService] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://secret-forest-02226.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setOrderedService(data)
        })
    }, [loggedInUser.email])

    return (
        <div className="row">
            <DashBoardSideBar></DashBoardSideBar>
            <div className="col-md-9">
                <h2 className="mt-4">Order List</h2>
                <div className="col-md-6">
                    {
                        orderedService.map(order => <div className="order" key={order._id}>
                            <h5>Service Name: {order.service.title}</h5>
                            <p><strong>Description:</strong> {order.service.description}</p>
                            <p><strong>Status:</strong> {order.service.status}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;