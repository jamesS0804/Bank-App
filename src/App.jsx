import Home from "./Pages/Home"
import Deposit from "./Pages/Deposit"
import Withdraw from "./Pages/Withdraw"
import Transfer from "./Pages/Transfer"
import useLocalStorage from "./Hooks/useLocalStorage.js"
import { Route, Routes } from "react-router-dom"

export default function App() {
  const [name,setName] = useLocalStorage("name")
  const [accountBalance,setAccountBalance] = useLocalStorage("accountBalance")
  const [cardNumber,setcardNumber] = useLocalStorage("cardNumber")
  const [expiryDate,setexpiryDate] = useLocalStorage("expiryDate")
  return (
    <div className="dashboard">
      <Routes>
          <Route path="/" element={<Home name={name} accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
          <Route path="/deposit" element={<Deposit accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
          <Route path="/withdraw" element={<Withdraw accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
          <Route path="/transfer" element={<Transfer accountBalance={accountBalance} setAccountBalance={setAccountBalance} cardNumber={cardNumber} expiryDate={expiryDate}/>}/>
      </Routes>
    </div>
  )
}
