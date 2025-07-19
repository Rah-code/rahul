import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Portfolios from '../portfolio-profile/portfolio-profile'
import './Portfolio.css'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <Header />

      <Portfolios />
      <Footer />
    </>
  )
}

export default Portfolio