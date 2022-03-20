import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import './HomeStyle.css'

const Home = () => {
  return (
    <div>
      <section className="header">
        <Navbar />
        <Hero />
      </section>
    </div>
  )
}

export default Home