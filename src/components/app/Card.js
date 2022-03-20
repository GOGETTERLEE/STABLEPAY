import React, {useEffect} from 'react'
import './CardStyle.css'
import {Context} from '../../context/Context'

const Card = ({cardName, cardColor, cardDate}) => {
    const {currentAccount} = React.useContext(Context)
    const [userName, setUserName] = React.useState()
  
  
    useEffect(() => {
      if (currentAccount) {
            setUserName(
              `${currentAccount.slice(0, 7)}...${currentAccount.slice(38)}`,
            )
    }}, [currentAccount])

  return (
      <div className={"card"+cardColor}>
        <div className="logo">
          <h3>STABLE PAY</h3>
        </div>
        <div className="cardinfo">
          <div className="grade">
            <h4>{cardDate}</h4>
          </div>
          <div className="name">
            <div className="cn">
                <div></div>
                <h3>{cardName}</h3>
            </div>
            
            <h4>{userName}</h4>
          </div>
        </div>
      </div>

  )
}
export default Card