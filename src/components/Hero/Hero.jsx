import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-content">
            <h2>Erick Silveira Berdnaski</h2>
            <p>Desenvolvedor Fullstack | Superando expectativas com soluções web</p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./images/react-icon.png" />
                </div>
                <img className="img-logo" src="./images/img11.jpeg" />
            </div>
        
            <div>
                <div className="tech-icon">
                    <img src="./images/node-icon.png" />
                </div>
                <div className="tech-icon">
                    <img src="./images/php.png" />
                </div>
                <div className="tech-icon">
                    <img src="./images/java-script.png" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero