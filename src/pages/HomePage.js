import React from 'react';
import gif1 from '../images/gif1.gif';
import '../styles/HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-image" id="home-image__animation">
            <img src={gif1} alt="dachshund" />
        </div>
    );
}

export default HomePage;