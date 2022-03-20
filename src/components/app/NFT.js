import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './NFTStyle.css'
import {Context} from '../../context/Context'

const NFT = () => {
    const {cards} = React.useContext(Context)
  return (
    <div className="collection">
        {[...cards].map((card, i) => (
            <Card key={i} {...card}/>
        ))}

    </div>
  )
}
export default NFT