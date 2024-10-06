import React from 'react';
import './About.css';  

const About = () => {
    return (
        <div className="jumbotron jumbotron-fluid"
            style={{
                backgroundImage: `url('/universe.jpg')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '100vh', 
                width: '100vw', 
                margin: '0', 
                padding: '0', 
                position: 'relative', 
                left: '50%', 
                transform: 'translateX(-50%)'
                
            }}>
            <div className="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center'
                
            }}>
                <h1 className="display-6 text-white highlighted-text">Explore the Cosmos: A Journey Through Space</h1>
                <p className="lead text-white highlighted-text" >
                An interactive exploration of celestial bodies, including planets, asteroids, and comets
                </p>
                <a className="btn btn-info btn-lg" href="#" role="button">LAUNCH ORREY</a>
            </div>
        </div>
    );
};

export default About;
