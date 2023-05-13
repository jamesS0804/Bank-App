import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Deposit from "./Deposit"
import Withdraw from "./Withdraw"
import Transfer from "./Transfer"
import useLocalStorage from "../Hooks/useLocalStorage.js"

export default function Main(props) {
    const {auth, setAuth} = props
    const [userData,setUserData] = useLocalStorage(
        {
            accountBalance:"accountBalance",
            expenseTotal:"expenseTotal",
            expenseItems:"expenseItems",
            name:"name",
            cardNumber:"cardNumber",
            expiryDate:"expiryDate"
        })

    return (
        <Routes>
            <Route index path="/home" element={<Home auth={auth} setAuth={setAuth} name={userData.name} accountBalance={userData.accountBalance} userData={userData} setUserData={setUserData} cardNumber={userData.cardNumber} expiryDate={userData.expiryDate}/>}/>
            <Route path="/deposit" element={<Deposit userData={userData} accountBalance={userData.accountBalance} setUserData={setUserData} cardNumber={userData.cardNumber} expiryDate={userData.expiryDate}/>}/>
            <Route path="/withdraw" element={<Withdraw userData={userData} accountBalance={userData.accountBalance} setUserData={setUserData} cardNumber={userData.cardNumber} expiryDate={userData.expiryDate}/>}/>
            <Route path="/transfer" element={<Transfer userData={userData} accountBalance={userData.accountBalance} setUserData={setUserData} cardNumber={userData.cardNumber} expiryDate={userData.expiryDate}/>}/>
        </Routes>
    )
}