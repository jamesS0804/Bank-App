import { getLoggedIn } from "../Hooks/useLocalStorage"
import "./login.css"

export default function Login(props) {
    const {setAuth} = props
    function handleSubmit(event) {
        event.preventDefault()
        const { email, password } = document.forms[0]
        setAuth(currentAuth => {
            currentAuth = getLoggedIn(email.value,password.value)
            return currentAuth
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Email </label>
            <input type="text" name="email" required />
            <label>Password </label>
            <input type="password" name="password" required />
            <input type="submit" />
        </form>
    )
}