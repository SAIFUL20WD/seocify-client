import React, { useEffect, useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './OrderList.css';

const OrderList = () => {
    const [allOrderedService, setAllOrderedService] = useState([])
    useEffect(() => {
        fetch('https://secret-forest-02226.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => {
            setAllOrderedService(data)
        })
    }, [])

    return (
        <div className="row">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-9 manage-services-container">
                <h3 className="mt-3">Order List</h3>
                <table id="manage-services-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrderedService.map(order => <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.service.title}</td>
                                <td>{order.shipment.payment}</td>
                                <td>{order.service.status}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;