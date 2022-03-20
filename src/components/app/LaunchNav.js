import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './LaunchNavStyle.css'
import {Context} from '../../context/Context'


const LaunchNav = () => {
  const [menu, setMenu] = React.useState("transfer")
  const {connectWallet, currentAccount} = React.useContext(Context)
  const [userName, setUserName] = React.useState()


  useEffect(() => {
    if (currentAccount) {
          setUserName(
            `${currentAccount.slice(0, 7)}...${currentAccount.slice(38)}`,
          )
  }}, [currentAccount])


  
  return (
    <div>
    <div className='navbar'>
      <Link to='/'><h1>STABLE PAY</h1></Link>
      
      {currentAccount ? (<div className="btnnav">{userName}</div>) : (<div className="btnnav" onClick={() => connectWallet()}>CONNECT WALLET</div>)}
    </div>
      
    <div className='lavbarContainer'>
      <ul className='selection'>
            <li className={menu == "transfer" &&'activebtn'}>
              <Link to='/Launch/Transfer' onClick={() => setMenu("transfer")}>PAY</Link>
            </li>
            <li className={menu == "bond" &&'activebtn'}>
              <Link to='/Launch/Mint' onClick={() => setMenu("bond")}>MINT</Link>
            </li>
            <li className={menu == "borrow" &&'activebtn'}>
              <Link to='/Launch/NFT' onClick={() => setMenu("borrow")}>NFT</Link>
            </li>
            <li className={menu == "deposit" &&'activebtn'}>
              <Link to='/Launch/History' onClick={() => setMenu("deposit")}>HISTORY</Link>
            </li>
          </ul>
    </div>
    </div>
  )
}

export default LaunchNav