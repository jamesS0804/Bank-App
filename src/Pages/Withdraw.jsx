import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import AmountInputField from "../Components/AmountInputField"
import "./withdraw.css"

export default function Withdraw({accountBalance,setAccountBalance,cardNumber,expiryDate}) {
    const [withdrawAmount,setWithdrawAmount] = useState(0)
    function handleChange() {
        setAccountBalance(() => {
            accountBalance -= Number(withdrawAmount)
            return accountBalance
        })
    }
    return (
        <div className="withdraw-page">
            <Link type="button" to="/">Back</Link>
            <h1>Withdraw</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <div className="withdraw-container">
                 <AmountInputField value={withdrawAmount} setValue={setWithdrawAmount}/>
                <input type="button" value={`withdraw $${withdrawAmount}`} onClick={handleChange} className="withdraw-amount-button"/>
            </div>
        </div>
    )
}