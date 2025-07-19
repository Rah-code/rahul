import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { RiTwitterFill } from 'react-icons/ri'
import { FaDribbble } from 'react-icons/fa'
import { BsBehance } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <Link to="/" className='footer__logo'>Rahul Jaiswal</Link>
      <ul className='permalinks'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experiences</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rahuljaiswalsoftwaredeveloper/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Rah-code" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></a>
        <a href="https://www.youtube.com/" target="_blank"><BsYoutube /></a>
        <a href="https://twitter.com" target="_blank"><RiTwitterFill /></a>
        <a href="https://dribbble.com/" target="_blank"><FaDribbble /></a>
        <a href="https://www.behance.net/" target="_blank"><BsBehance /></a>


      </div>
      <div className="footer__copyright">
        <small>&copy; Rahul Jaiswal</small>
      </div>

    </footer>
  )
}

export default Footer