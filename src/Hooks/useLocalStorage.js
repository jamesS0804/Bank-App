import { useEffect, useState } from "react"

//temporary user list in local storage
const userList = [
    {
        id: "20231234567",
        name: "John Smith",
        email: "jSmith@gmail.com",
        password: "jSmith1234",
        cardNumber: "1234 5678 1234 5678",
        expiryDate: "1/26",
        accountBalance: 100,
        expenseTotal: 0,
        add: "function a() {  }",
        delete: "function d() {}",
        expenseItems: []
    },
    {
        id: "20235671234",
        name: "Jane Doe",
        email: "jDoe@gmail.com",
        password: "jDoe5678",
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "3/30",
        accountBalance: 8500,
        expenseTotal: 0,
        add: () => {},
        delete: () => {},
        expenseItems: []
    }
]
// // testing purposes

// localStorage.clear
// localStorage.setItem("loggedAccount", JSON.stringify(""))
// localStorage.setItem("auth", JSON.stringify(false))
// localStorage.setItem("userList", JSON.stringify(userList))

const storedUserList = JSON.parse(localStorage.getItem("userList"))

export default function useLocalStorage(key) {
    const loggedAccountId = JSON.parse(localStorage.getItem("loggedAccount"))
    const [loggedAccount,setLoggedAccount] = useState(() => {
        return getAccountInfo(loggedAccountId)
    })
    const [value,setValue] = useState(() => {
        if(key instanceof Object) {
            const newObject = {}
            const specificKeys = Object.values(key)
            specificKeys.forEach(sKey => {
                newObject[sKey] = loggedAccount[sKey]
            })
            return newObject
        }
        return loggedAccount[key]
    })
    useEffect(()=> {
       setLoggedAccount(currentAccountInfo => {
            currentAccountInfo = {...loggedAccount}
            if(key instanceof Object) {
                for(const sKey in value) {
                    currentAccountInfo[sKey] = value[sKey]
                }
            } else {
                currentAccountInfo[key] = value
            }
            return currentAccountInfo
       })
    },[value])
    useEffect(() => {
        updateAccountInfo(loggedAccount)
    }, [loggedAccount])

    return [value,setValue]
}
export function getLoggedIn(email,password) {
    for(let user of storedUserList){
        if(user.email === email) {
            if(user.password === password) {
                localStorage.setItem("loggedAccount",JSON.stringify(user.id))
                return true
            }
        }    
    }
    return false
}
export function getAccountInfo(accountID) {
    for(const user of storedUserList){
        if(user.id === accountID) {
            return user
        }
    }
}
export function updateAccountInfo(account) {
    for(let user of storedUserList) {
        if(user.id === account.id) {
            Object.assign(user,account)
            break
        }
    }
    localStorage.setItem("userList",JSON.stringify(storedUserList))
}
