import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import AmountInputField from "../Components/AmountInputField"
import "./deposit.css"

export default function Deposit(props) {
    const {accountBalance,setAccountBalance,cardNumber,expiryDate} = props
    const [depositAmount,setDepositAmount] = useState(0)
    function handleSubmit(event) {
        event.preventDefault()
        setAccountBalance(currentAccountBalance => {
            currentAccountBalance = accountBalance + Number(depositAmount)
            return currentAccountBalance
        })
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