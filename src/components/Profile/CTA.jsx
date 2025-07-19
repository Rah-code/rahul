import React from 'react'
import CV from '../../assets/astha(cv).pdf'
import CL from '../../assets/astha(cl).pdf'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className='btn' target="_blank">Download CV</a>
      <a href={CL} className='btn' target="_blank">Cover Letter</a>
      <Link to="/contact" className='btn btn-primary let'>Let's Talk</Link>
    </div>
  )
}

export default CTA