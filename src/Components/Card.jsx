import "./card.css"

export default function Card({accountBalance,cardNumber,expiryDate}) {
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