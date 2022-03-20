import React from 'react'
import { Link } from 'react-router-dom'
import './HeroStyle.css'



const Hero = () => {
  return (
    <>
    <div className='hero'>
      <h1>STABLE PAY</h1>
      <h2>Make Cryptocurrency Simple and Stable</h2>
      <Link to='/Launch/Transfer' className='btn'>LAUNCH APP</Link>
    </div>
    
    </>
  )
}

export default Hero