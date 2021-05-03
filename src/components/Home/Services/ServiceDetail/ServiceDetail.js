import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = (props) => {
    const {title, price, description, img, _id} = props.serviceInfo;
    const history = useHistory();
    const handleCheckoutRedirect = () => {
        const url = `/checkout/${_id}`;
        history.push(url)
    }
    return (
        <div className="col">
            <div className="card h-100 service">
                <img src={img} className="service-img" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h4 className="text-brand fw-bold">${price}</h4>
                    <p className="card-text">{description}</p>
                    <button onClick={handleCheckoutRedirect} className="btn btn-brand-primary">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;