import { Link } from "react-router-dom"
// import {getAccountInfo} from "../Hooks/useLocalStorage.js"

export default function Actions() {
  return (
    <>
      <div className="actions">
        <Link type="button" to="/deposit" className="card deposit">
          Deposit
        </Link>
        <Link type="button" to="/withdraw" className="card withdraw">
          Withdraw
        </Link>
        <Link type="button" to="/transfer" className="card transfer">
          Transfer
        </Link>
      </div>
    </>
  )
}