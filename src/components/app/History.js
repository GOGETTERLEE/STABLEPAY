import React from 'react'
import './HistoryStyle.css'
import {Context} from '../../context/Context'

const Line = ({transFrom, transTo, transAmount, transTime}) => {
    return(
        <>
    <div className="line"></div>
      <div className="list">
        <div className="item">
          <h4>{transFrom}</h4>
        </div>
        <div className="item">
          <h4>{transTo}</h4>
        </div>
        <div className="item">
          <h4>{transAmount}</h4>
        </div>
        <div className="item">
          <h4>{transTime}</h4>
        </div>
      </div>
      </>
    )
}
const History = () => {
    const {transactions} = React.useContext(Context)
  return (
    <div className="history">
      <div className="fl">
        <div className="item">
          <h4>FROM</h4>
        </div>
        <div className="item">
          <h4>TO</h4>
        </div>
        <div className="item">
          <h4>AMOUNT</h4>
        </div>
        <div className="item">
          <h4>DATE</h4>
        </div>
      </div>
      {[...transactions].reverse().map((transaction, i) => (
            <Line key={i} {...transaction}/>
        ))}
    </div>
  )
}
export default History