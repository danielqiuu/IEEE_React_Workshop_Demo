import React from 'react'
import Proj1 from '../assets/proj1.jpg'
import Proj2 from '../assets/proj2.jpg'
import Proj3 from '../assets/proj3.webp'
import '../styles/portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2>These are my projects</h2>
        <div className="portfolio_container">
            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={Proj1} alt="Project" />
                </div>
                <h3>Description</h3>
                <a href="https://github.com" className='btn'>GitHub</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={Proj2} alt="Project" />
                </div>
                <h3>Description</h3>
                <a href="https://github.com" className='btn'>GitHub</a>
            </article>

            <article className="portfolio_item">
                <div className='portfolio_item-image'>
                    <img src={Proj3} alt="Project" />
                </div>
                <h3>Description</h3>
                <a href="https://github.com" className='btn'>GitHub</a>
            </article>
        </div>
    </section>
  )
}

export default Portfolio