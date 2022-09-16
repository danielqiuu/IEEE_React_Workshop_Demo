import React from 'react'
import { SiFacebookgaming } from 'react-icons/si'
import { CgInstagram } from 'react-icons/cg'
import { AiOutlineGithub } from 'react-icons/ai'
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer>

      <div className='footer_socials'>
        <a href="https://facebook.com"><SiFacebookgaming/></a>
        <a href="https://instagram.com"><CgInstagram/></a>
        <a href="https://github.com"><AiOutlineGithub/></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; IEEE 2022</small>
      </div>
    </footer>
  )
}

export default Footer