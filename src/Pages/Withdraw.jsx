import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import AmountInputField from "../Components/AmountInputField"
import "./withdraw.css"
import "../Components/card.css"
import { flushSync } from "react-dom"

export default function Withdraw(props) {
    const {userData, setUserData, accountBalance, cardNumber, expiryDate} = props
    const [withdrawAmount,setWithdrawAmount] = useState(0)
    function handleSubmit(event) {
        event.preventDefault()
        flushSync(() => {
            setUserData({...userData, 
                accountBalance: accountBalance - Number(withdrawAmount)
            })
        })
        setWithdrawAmount(0)
    }
    return (
        <div className="withdraw-page">
            <Link type="button" to="/home">Back</Link>
            <h1>Withdraw</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <form className="withdraw-container" onClick={handleSubmit}>
                <AmountInputField value={withdrawAmount} setValue={setWithdrawAmount}/>
                <input type="submit" value={`withdraw $${withdrawAmount}`} className="withdraw-amount-button"/>
            </form>
        </div>
    )
}