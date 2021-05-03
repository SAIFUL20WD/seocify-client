import React from 'react';

const Testimonial = (props) => {
    const {quote, name, company ,img} = props.testimonial;
    return (
        <div className="col">
            <div className="card h-100">
                <img className="m-3" src={img || ''} alt="" width="60"/>
                <div className="card-body">
                    <h6 className="text-primary">{name}</h6>
                    <p className="card-text">{company}</p>
                    <p className="card-text">{quote}</p>
                    <p className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;