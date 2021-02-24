import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
    <div className="fixed-bottom">
        <div className="bottom-container">
            <div className="row">
            {/* column1 */}
                <div className="col">
                Ironhack Final Project by Francisco Maraposo & Sara Wilcox
                </div>
            {/* column2 */}
                <div className="col">
                    <a href="https://github.com/saraewilcox/watermelon-client">View code on github</a>
                </div>
            </div>
        </div>
    </div>)
}

 export default Footer;