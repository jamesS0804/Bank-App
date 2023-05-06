import Card from "../Components/Card"
import Actions from "../Components/Actions"
import Budget from "../Components/Budget"

export default function Home(props) {
    const {name, accountBalance, cardNumber, expiryDate} = props
    return (
        <div className="home-page">
            <h1>Welcome back, {name}!</h1>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>
            <Actions/>
            <Budget/>
        </div>
    )
}