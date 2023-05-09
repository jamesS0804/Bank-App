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
        accountBalance: 0,
        add: () => {},
        delete: () => {},
        list: [
            {
                itemId: "1",
                itemName: "test",
                itemCost: 100,
                itemOwner: "20231234567",
                itemUpdate: function () {
                    return this.itemId
                }
            },
            {
                itemId: "2",
                itemName: "test2",
                itemCost: 400,
                itemOwner: "20231234567",
                itemUpdate: function () {
                    return this.itemId
                },
            }
        ]
    },
    {
        id: "20235671234",
        name: "Jane Doe",
        email: "jDoe@gmail.com",
        password: "jDoe5678",
        cardNumber: "1234 1234 1234 1234",
        expiryDate: "3/30",
        accountBalance: 100,
        add: () => {},
        delete: () => {},
        list: [
            {
                itemId: "3",
                itemName: "abc",
                itemCost: 1000,
                itemOwner: "20235671234",
                itemUpdate: () => {

                }
            },
            {
                itemId: "4",
                itemName: "abc2",
                itemCost: 500,
                itemOwner: "20235671234",
                itemUpdate: () => {}
            }
        ]
    }
]

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

// testing purposes

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
}
export function getAccountInfo(accountID) {
    for(let user of storedUserList){
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
