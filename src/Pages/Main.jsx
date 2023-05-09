import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Deposit from "./Deposit"
import Withdraw from "./Withdraw"
import Transfer from "./Transfer"
import useLocalStorage from "../Hooks/useLocalStorage.js"

export default function Main(props) {
    const {auth, setAuth} = props
    const name = useLocalStorage("name")
    const [accountBalance,setAccountBalance] = useLocalStorage("accountBalance")
    const cardNumber = useLocalStorage("cardNumber")
    const expiryDate = useLocalStorage("expiryDate")

    return (
        <Routes>
            <Route index path="/home" element={<Home auth={auth} setAuth={setAuth} name={name} accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
            <Route path="/deposit" element={<Deposit accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
            <Route path="/withdraw" element={<Withdraw accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
            <Route path="/transfer" element={<Transfer accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
        </Routes>
    )
}