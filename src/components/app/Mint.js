import React from 'react'
import Card from './Card'
import './MintStyle.css'
import {Context} from "../../context/Context"

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

const Mint = () => {
    const {onChangeName, name, setColor, color, createCard} = React.useContext(Context);



  return (
    <div className="mint">
      <Card cardName={name} cardColor={color} cardDate = "current time"/>
      <div className="color">
          <div onClick={()=>setColor(1)} className="option" id="option1">

          </div>
          <div onClick={()=>setColor(2)} className="option" id="option2">

          </div>
          <div onClick={()=>setColor(3)} className="option" id="option3">

          </div>
          <div onClick={()=>setColor(4)} className="option" id="option4">
 
          </div>
      </div>
      <div className="mintpage">
      <div className="amountcontainer">
          <h4>CARD ID</h4>
          <Input className="input" value={name} type="text" handleChange={onChangeName} />
        </div>

        <div onClick={()=>createCard()}className="sendbtn">
          MINT
        </div>
      </div>
    </div>
  )
}
export default Mint