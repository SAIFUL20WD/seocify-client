import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonialData, setTestimonialsData] = useState([])
    useEffect( () => {
        fetch('https://secret-forest-02226.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setTestimonialsData(data))
    }, [])

    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
                <h2 className="text-center text-brand fw-bold mt-3">Testimonial</h2>
                <h5 className="text-center my-3">What Our Client Says </h5>
               <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;