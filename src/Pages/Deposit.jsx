import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import AmountInputField from "../Components/AmountInputField"
import "./deposit.css"

export default function Deposit(props) {
    const {accountBalance,setAccountBalance,cardNumber,expiryDate} = props
    const [depositAmount,setDepositAmount] = useState(0)
    function handleChange() {
        setAccountBalance(currentAccountBalance => {
            currentAccountBalance = accountBalance + Number(depositAmount)
            console.log(depositAmount)
            return currentAccountBalance
        })
    }
    return (
        <div className="deposit-page">
            <Link type="button" to="/">Back</Link>
            <h1>Deposit</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <div className="deposit-container">
                 <AmountInputField value={depositAmount} setValue={setDepositAmount}/>
                <input type="button" value={`Deposit $${depositAmount}`} onClick={handleChange} className="deposit-amount-button"/>
            </div>
        </div>
    )
}