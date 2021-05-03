import React from 'react';
import project1 from '../../../images/project-1.png';
import project2 from '../../../images/project-2.png';
import project3 from '../../../images/project-3.png';
import './Projects.css';


const Projects = () => {
    return (
        <section className="container mt-5">
            <h2 className="text-center text-brand my-4 fw-bold">Projects</h2>
            <h5 className="text-center my-3">Discover Our Great Projects</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src={project1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Twice Profit Then Before</h4>
                            <p className="card-text">Marketing, Sales, SEO, Visitor</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={project2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Build Web Faster &amp; Better</h4>
                            <p className="card-text">Analysis, Marketing, Traffic</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={project3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Planning To Million Visitor</h4>
                            <p className="card-text">Visualize, Planning, Growth</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;