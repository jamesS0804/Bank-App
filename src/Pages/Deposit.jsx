import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import AmountInputField from "../Components/AmountInputField"
import "../Components/card.css"
import "./deposit.css"
import { flushSync } from "react-dom"

export default function Deposit(props) {
    const {userData, setUserData, accountBalance, cardNumber, expiryDate} = props
    const [depositAmount,setDepositAmount] = useState(0)
    function handleSubmit(event) {
        event.preventDefault()
        flushSync(() => {
            setUserData({...userData, 
                accountBalance: accountBalance + Number(depositAmount)
              })
        })
        setDepositAmount(0)
    }
    return (
        <div className="deposit-page">
            <Link type="button" to="/home">Back</Link>
            <h1>Deposit</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <form className="deposit-container" onSubmit={handleSubmit}>
                <AmountInputField value={depositAmount} setValue={setDepositAmount}/>
                <input type="submit" value={`Deposit $${depositAmount}`} className="deposit-amount-button"/>
            </form>
        </div>
    )
}