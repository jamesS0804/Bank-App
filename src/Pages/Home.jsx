import Card from "../Components/Card"
import Actions from "../Components/Actions"
import Budget from "../Components/Budget"

export default function Home(props) {
    const {name, accountBalance, cardNumber, expiryDate} = props
    const {auth, setAuth} = props

    function handleClick() {
        setAuth(currentAuth => {
            currentAuth = !auth
            localStorage.setItem("loggedAccount",JSON.stringify(" "))
            return currentAuth
        })
    }
    return (
        <div className="home-page">
            <header>
                <h1>Welcome back, {name}!</h1>
                <input type="button" value="Log out" onClick={handleClick}/>
            </header>
            <Card accountBalance={accountBalance} cardNumber={cardNumber} expiryDate={expiryDate} />
            <Actions />
            <Budget />
        </div>
    )
}