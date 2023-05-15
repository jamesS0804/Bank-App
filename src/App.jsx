import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Main from "./Pages/Main"
import Login from "./Pages/Login"

export default function App() {
  const navigate = useNavigate()
  const [auth,setAuth] = useState(() => {
    if(!localStorage.getItem("auth")) {
      return false
    }
    return JSON.parse(localStorage.getItem("auth"))
  })
  useEffect(()=> {
    if(auth){
      navigate("/home")
    }
  }, [auth])
  localStorage.setItem("auth",JSON.stringify(auth))

  return (
    <>
      {auth ? <Main auth={auth} setAuth={setAuth}/> : <Login  setAuth={setAuth}/>}
    </>
  )
}