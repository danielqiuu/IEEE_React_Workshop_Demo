import React from 'react'
import ME from '../assets/me.jpg'
import '../styles/header.css'
const Header = () => {
  return (
    <header>
       <div className="header_container">
            <h5>Hello I am</h5>
            <h1>IEEE</h1>
            <h5 className='text-light'>Best club at UofT</h5>
            <div className="me">
                <img src={ME} alt="" />
            </div>
        </div> 
    </header>
  )
}

export default Header