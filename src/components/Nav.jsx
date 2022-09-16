import {React, useState} from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsBriefcase } from 'react-icons/bs'
import '../styles/nav.css'
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
       <nav>
        <a href="#" onClick={() => setActiveNav('#') } className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href='#about' onClick={() => setActiveNav('#about') } className={activeNav==='#about' ? 'active' : ''}><CgProfile/></a>
        <a href='#portfolio' onClick={() => setActiveNav('#portfolio') } className={activeNav==='#' ? 'active' : ''}><BsBriefcase/></a>
       </nav> 
    )
}

export default Nav