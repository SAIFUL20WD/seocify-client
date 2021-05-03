import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../images/delete.png';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './ManageServices.css';

const ManageServices = () => {
    const [manageServices, setManageServices] = useState([])
    const loadServices = () => {
        fetch('https://secret-forest-02226.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setManageServices(data)
        })
    }
    useEffect( () => loadServices(), [])

    const handleDelete = (id) => {
        fetch(`https://secret-forest-02226.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res){
                loadServices()
            }
        })
    }
    return (
        <div className="row">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-9 manage-services-container">
                <h3 className="mt-3">Manage Services</h3>
                <table id="manage-services-table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageServices.map(serviceDetail => <tr key={serviceDetail._id}>
                                <td>{serviceDetail.title}</td>
                                <td>{serviceDetail.description}</td>
                                <td>${serviceDetail.price}</td>
                                <td>
                                    <img src={deleteIcon} alt="" onClick={() => handleDelete(serviceDetail._id)} />
                                </td>
                            </tr>)
                        }    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;