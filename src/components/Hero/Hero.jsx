import React from 'react';
import './Hero.css'
import Header from '../Header/Header';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-hero">
          <Header />

        <div className="the-best-ad">
          <div></div>
          <span>The best finess club in the city</span>
        </div>

            <br />
        {/* hero  heading  */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'> Shape</span>
            <span> Your</span>
            </div>
          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              in here we will help
              you to shape and
              build your ideal body
              and live up your live
              to fullest
            </span>
          </div>
        </div>
           <br />
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>

          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness prgrams</span>
          </div>
        </div>
        <br />
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-hero">rightside</div>


    </div>
  );
}

export default Hero;
