import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import AmountInputField from "../Components/AmountInputField"
import { getAccountInfo, updateAccountInfo } from "../Hooks/useLocalStorage"
import "./transfer.css"
import "../Components/card.css"
import { flushSync } from "react-dom"

export default function Transfer(props) {
    const {userData, setUserData, accountBalance, cardNumber, expiryDate} = props
    const [transferAmount,setTransferAmount] = useState(0)
    function handleSubmit(event) {
        event.preventDefault()
        const receiverAccNumber = receiverAccountNumber.value

        if(!getAccountInfo(receiverAccNumber)) return 0

        const receiverAccount = getAccountInfo(receiverAccNumber)

        receiverAccount.accountBalance += Number(transferAmount)
        updateAccountInfo(receiverAccount)

        flushSync(() => {
            setUserData({...userData, 
                accountBalance: accountBalance - Number(transferAmount)
              })
        })
        setTransferAmount(0)
    }
    return (
        <div className="transfer-page">
            <Link type="button" to="/home">Back</Link>
            <h1>Transfer</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <form className="transfer-container" onSubmit={handleSubmit}>
                <AmountInputField value={transferAmount} setValue={setTransferAmount}/>
                <label htmlFor="receiverAccountNumber">Receiver Account Number: </label>
                <input type="number" id="receiverAccountNumber" placeholder="Receiver Account Number" required/>
                <label htmlFor="receiverAccountName">Receiver Account Name: </label>
                <input type="text" id="receiverAccountName" placeholder="Receiver Account Name" required/>
                <input type="submit" value={`Transfer $${transferAmount}`} className="transfer-amount-button"/>
            </form>
        </div>
    )
}