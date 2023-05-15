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
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <label htmlFor="email">Username </label>
            <input id="email" type="email" name="email" placeholder="Email" required />
            <label htmlFor="password">Password </label>
            <input id="password" type="password" name="password" placeholder="Password" required />
            <input type="submit" value="Log In" />
            <div className="sign-up-section">
                <span>Don't have an account yet?</span>
                <a>Sign Up</a>
            </div>
        </form>
    )
}