import React from 'react'
import ME from '../../assets/ab.jpeg'
import './About_profile.css'
import { FaAward } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
const About_profile = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="aboutme">
                    <div className="about__me-image">
                        <img src={ME} alt="About mypic" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <Link to="/experience" style={{ color: "white" }} >
                            <article className='about__card' style={{ cursor: "pointer" }}>
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <h3>3+</h3>
                            </article>
                        </Link>
                        <Link to="" style={{ color: "white" }}>
                            <article className='about__card' style={{ cursor: "pointer" }}>
                                <GiSpellBook className='about__icon' />
                                <h5>Internship</h5>
                                <h3>3+<small> projects</small></h3>
                            </article>
                        </Link>

                        <Link to="/portfolio" className="btn1" style={{ color: "white" }}><article className='about__card' style={{ cursor: "pointer" }}>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <h3>8+ <small> Completed</small></h3>
                        </article>
                        </Link>
                    </div>
                    <p>
                        My name is Rahul Jaiswal. My highest Education Qualification is B.E from
                        Sri Sairam College of Engineering, Bengaluru, Karnataka. My Stream is Computer Science and Engineering.
                        I am a FullStack Developer currently working at Toshiba Software India Pvt. Ltd.

                    </p>

                    <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
                </div>
            </div>
        </section>
    )
}

export default About_profile