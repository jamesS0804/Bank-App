import Card from "../Components/Card"
import Actions from "../Components/Actions"
import Budget from "../Components/Budget"

export default function Home({name, accountBalance, setAccountBalance, cardNumber, expiryDate}) {
    return (
        <div className="home-page">
            <h1>Welcome back, {name}!</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <Actions accountBalance={accountBalance} setAccountBalance={setAccountBalance}/>
            <Budget/>
        </div>
    )
}