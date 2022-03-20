import React from 'react'
import { Link } from 'react-router-dom'
import {Context} from "../../context/Context"
import './TransferStyle.css'
const Input = ({ placeholder,  type, value, handleChange}) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e)}
      className="input"
    />
  );
const Transfer = () => {
    const {onChangeTo, to, onChangeAmount, amount, transfer} = React.useContext(Context);
  return (
    <div className="transfer">
      <div className="container">
        <div className="inputcontainer">
          <h4>TO</h4>
          <div className="inputandon">
          <Input className="input" value={to} type="text" handleChange={onChangeTo} />
            <h3>ON</h3>
          </div>
        </div>

        <div className="amountcontainer">
          <h4>AMOUNT ($)</h4>
          <Input className="input" value={amount} type="number" handleChange={onChangeAmount} />
        </div>
        <div onClick={() => transfer()} className="sendbtn">
          PAY
        </div>
      </div>
    </div>
  )
}
export default Transfer