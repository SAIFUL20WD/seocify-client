import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetail from './ServiceDetail/ServiceDetail';

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect( () => {
        fetch('https://secret-forest-02226.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])

    return (
        <section className="container mt-5 pt-5 mb-5">
            <h2 className="text-center text-brand my-4 fw-bold">Services</h2>
            <h5 className="text-center my-3">Increase organic <span className="text-brand">website traffic</span> and enhance your business web presence</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    serviceData.map(service => <ServiceDetail serviceInfo={service} key={service._id}></ServiceDetail>)
                }
            </div>

        </section>
    );
};

export default Services;