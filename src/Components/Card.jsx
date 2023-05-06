import "./card.css"

export default function Card(props) {
  const {accountBalance,cardNumber,expiryDate} = props
  return (
    <div className="card account-container">
          <div className="account-balance">${accountBalance}</div>
          <div className="account-details">
            {cardNumber}<br></br>
            {expiryDate}  
          </div>
    </div>
  )
}