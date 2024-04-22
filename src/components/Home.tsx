import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="landing-container">
            <div className="content-left">
                <button className="download-button">Download App</button>
                <button className="login-button">Login or Create Account</button>
            </div>
            <div className="content-right">
                <img src="/path/to/your/images/mobile-app-image.png" alt="Mobile App" />
            </div>
        </div>
    );
}

export default Home;
