import { useEffect, useState } from "react"

// class User {
//     constructor(email,name,password){
//         email
//         name
//         password
//     }
//     list() {

//     }
//     addItem() {

//     }
//     deleteItem() {

//     }
// }
// class ExpenseItem {
//     constructor(itemName,cost,user){
//         itemName
//         cost
//         user
//     }
//     updateItem() {

//     }
// }
const userList = [
    {
        id: "abcdef-1234-xyz",
        name: "John Smith",
        cardNumber: "1234 5678 1234 5678",
        expiryDate: "1/26",
        accountBalance: 0,
        expenses: []
    },
    {
        id: "ghijkl-5678-rst",
        name: "Jane Doe",
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "3/30",
        accountBalance: 100,
        expenses: []
    }
]
// localStorage.clear
// localStorage.setItem("userList", JSON.stringify(userList))
// console.log(userList)
// localStorage.setItem("loggedAccount",JSON.stringify(userList[0].id))
// console.log(userList[0].id)

const storedUserList = JSON.parse(localStorage.getItem("userList"))
const loggedAccountID = JSON.parse(localStorage.getItem("loggedAccount"))

export default function useLocalStorage(key) {
    const [loggedAccount,setLoggedAccount] = useState(() => {
        return getAccountInfo(loggedAccountID)
    })
    const [value,setValue] = useState(() => {
        return loggedAccount[`${key}`]
    })

    useEffect(()=> {
       setLoggedAccount(currentAccountInfo => {
            currentAccountInfo = {...loggedAccount}
            currentAccountInfo[`${key}`] = value
            return currentAccountInfo
       })
    },[value])
    useEffect(() => {
        for(let user of storedUserList) {
            if(user.id === loggedAccount.id) {
                Object.assign(user,loggedAccount)
                break
            }
        }
        localStorage.setItem("userList",JSON.stringify(storedUserList))
    }, [loggedAccount])

    return [value,setValue]
}
export function getAccountInfo(accountID) {
    for(let user of storedUserList){
        if(user.id === accountID) {
            return user
        }
    }
}
