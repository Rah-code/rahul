import React from 'react'
import './Profile.css'
import ME from '../../assets/a1.jpeg'
import CTA from './CTA'
import Socials from './Socials'

const Profile = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rahul Jaiswal</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
        <Socials />
        <a className='scroll__down'>FullStack Developer</a>
      </div>
    </header>
  )


}

export default Profile