// Home.js
import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile.jpeg'; // Import the image

function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio!</h2>
      <div className='container'>
        <img src={profileImage} alt="home" />
        <p>
          My name is Bold-Erdene, I'm an IT enthusiast specializing in IoT, Web Development, 
          Cloud Computing, DevOps, Data Analysis and Algorithmic Trading.
          As a recent graduate in IT, I'm driven by a passion for technology and innovation. 
          From developing smart home IoT systems to crafting algorithmic trading strategies using machine learning, 
          I thrive at the intersection of creativity and technical expertise.
        </p>
      </div>
    </div>
  );
}

export default Home;
