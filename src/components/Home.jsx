import React from 'react';
import homeHero from '../assets/images/home-hero.png';
import './Home.css';
function Home () {
    return (
        <div className="home">
            <img src={homeHero} alt="home-hero-image" />
        
        <h1>You got the travel plans, we got the travel van!</h1>
        <p>Add adventures to your life by jining the #vanlife movement. </p>
        <p>Rent the perfect van for your next adventure!</p>
        <button>Find Your Van</button>
        </div>
        
    )
}
export default Home;