import React from 'react'
import './LaunchStyle.css'
import LaunchNav from '../components/app/LaunchNav'
import Transfer from '../components/app/Transfer'
import Mint from '../components/app/Mint'
import NFT from '../components/app/NFT'
import History from '../components/app/History'
import { Routes, Route } from 'react-router-dom'

const Launch = () => {
  return (
    <div className="appmain">
      <LaunchNav/>
      <Routes>
          <Route path='Transfer' element={<Transfer/>} />
          <Route path='Mint' element={<Mint/>} />
          <Route path='NFT' element={<NFT/>} />
          <Route path='History' element={<History/>} />
      </Routes>
    </div>
  )
}
export default Launch