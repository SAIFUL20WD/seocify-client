import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container row mx-auto">
                <div className="col-md-3">
                    <ul>
                        <li><h4>Contact</h4></li>
                        <li><a href=""><i className="fas fa-map mx-2"></i>224 W 20th St, New York NY 10011, USA</a></li>
                        <li><a href=""><i className="fas fa-phone-alt mx-2"></i>+1 (212) 255-5511</a></li>
                        <li><a href=""><i className="far fa-envelope-open mx-2"></i>info@seocify.com</a></li>
                        <li className="text-white social mt-3">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram mx-2"></i>
                            <i className="fab fa-youtube"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h4>Quick Links</h4></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Sales</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h4>Our Company</h4></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h4>Our Services</h4></li>
                        <li><a href="">Email Marketing</a></li>
                        <li><a href="">Growth Marketing</a></li>
                        <li><a href="">Offline SEO</a></li>
                        <li><a href="">Social Media Marketing</a></li>
                    </ul>
                </div>
            </div>
            <div className="copy-right text-center">
                <p>&copy; Seocify {(new Date()).getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;