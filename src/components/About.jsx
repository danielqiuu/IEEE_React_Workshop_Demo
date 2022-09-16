import React from 'react'
import {FaAward} from 'react-icons/fa'
import '../styles/about.css'
const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className="about_container">
        <div className="about_content">
          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>2nd Series of IEEE workshop</small>
          </article>

          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>2nd Series of IEEE workshop</small>
          </article>
          
          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>2nd Series of IEEE workshop</small>
          </article>
          <p>Insert Description here (Pushing P)</p>
        </div>
      </div>
    </section>
  )
}

export default About