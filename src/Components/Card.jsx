import "./card.css"
import bankChip from "../assets/bank-card-chip.png"
import visaLogo from "../assets/bank-card-visa.png"

export default function Card(props) {
  const {accountBalance,cardNumber,expiryDate} = props
  return (
    <div className="card account-container">
      <div className="account-balance">$ {accountBalance}</div>
      <img id="bank-chip" src={bankChip} />
      <div className="account-details">
        <div>{expiryDate}</div> 
        <div>{cardNumber}</div> 
      </div>
      <img id="visa-logo" src={visaLogo} />
    </div>
  )
}