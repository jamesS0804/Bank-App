import "./budget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react"

export default function Budget(props) {
  const { userData,setUserData } = props
  const ref = useRef([])
  const expenseTotalRef = useRef(0)
  const expenseItemNameRef = useRef([])
  const expenseCostRef = useRef([])
  const expenseItemNameRefArray = Array.from(expenseItemNameRef.current)
  const expenseCostRefArray = Array.from(expenseCostRef.current)
  let index = 0
  let deletedItemCost = 0

  // useEffect(() => {
  //   console.log(" ")
  //   console.log("ON RENDER...")
  //   console.log("data array: ")
  //   console.log(userData.expenseItems)
  //   console.log("data total: " + userData.expenseTotal)
  //   console.log("account balance: " + userData.accountBalance)
  //   console.log(" ")
  // },[])
  // useEffect(() => {
  //   console.log(" ")
  //   console.log("ON USER DATA UPDATE...")
  //   console.log("data array: ")
  //   console.log(userData.expenseItems)
  //   console.log("data total: " + userData.expenseTotal)
  //   console.log("account balance: " + userData.accountBalance)
  //   console.log(" ")
  // }, [userData])

  function updateAccountBalance (currentBalance,operation,deletedCost) {
    let newBalance = operation === "add" ? currentBalance + Number(deletedCost) : (currentBalance - expenseTotalRef.current) + userData.expenseTotal
    return newBalance
  }
  function updateExpenseTotal() {
    expenseTotalRef.current = ref.current.reduce((subtotal,item) => {
      return Math.abs(subtotal + Number(item.cost))
    },0)
    return expenseTotalRef.current
  }
  function reduceExpenseItems(idToDel) {
    ref.current = userData.expenseItems.filter(expenseItem => {
      if(expenseItem.id !== idToDel) {
        return expenseItem
      } else {
        deletedItemCost = expenseItem.cost
      }
    })
    return ref.current
  }
  function editExpenseItems(itemIdToEdit) {
    ref.current = userData.expenseItems.map((expenseItem,index) => {
      if(itemIdToEdit) {
        if(expenseItem.id !== itemIdToEdit) {
          return expenseItem
        }
        return Object.assign(expenseItem, {name: expenseItemNameRef.current[index].value, cost: expenseCostRef.current[index].valueAsNumber, isBeingEdited: false})
      }
      return expenseItem
    })
    return ref.current
  }
  function handleEditExpense(idToEdit) {
    setUserData({...userData, 
      expenseItems: editExpenseItems(idToEdit),
      expenseTotal: updateExpenseTotal(),
      accountBalance: updateAccountBalance(userData.accountBalance,"minus",0)
    })
  }
  function handleDeleteExpense(idToDelete) {
    setUserData({...userData, 
      expenseItems: reduceExpenseItems(idToDelete),
      expenseTotal: updateExpenseTotal(),
      accountBalance: updateAccountBalance(userData.accountBalance,"add",deletedItemCost)
    })
  }
  function handleAddExpense() {
    setUserData({...userData, 
      expenseItems: 
        [ ...userData.expenseItems,
          { 
            id: crypto.randomUUID(),
            name: "Expense Item",
            cost: 0,
            owner: userData.id,
            isBeingEdited: false
          }
        ]
    })
  }
  function handleFocusInput(itemToFocus) {
    expenseItemNameRefArray.forEach((ref, i) => {
      if(ref.id === itemToFocus) {
        index = i
      } else {
        expenseItemNameRef.current[i].readOnly = true
      }
    })
    expenseCostRefArray.forEach((ref, i) => {
      if(ref.id === itemToFocus) {
        index = i
      } else {
        expenseCostRef.current[i].readOnly = true
      }
    })
    setUserData({...userData, 
      expenseItems: 
        userData.expenseItems.map((expenseItem, i) => {
          if(expenseItem.id !== itemToFocus) {
            return Object.assign(expenseItem, {name: expenseItemNameRef.current[i].value, cost: expenseCostRef.current[i].valueAsNumber, isBeingEdited: false})
          }
          return Object.assign(expenseItem, {isBeingEdited: true})
        }),
      expenseTotal: 
        userData.expenseItems.reduce((subtotal,item) => {
          return Math.abs(subtotal + Number(item.cost))
        },0)
    })
    expenseItemNameRef.current[index].readOnly = false
    expenseCostRef.current[index].readOnly = false
    expenseItemNameRef.current[index].focus()
  }
  return (
    <div className="card budget-container">
      <h1>Expenses</h1>
      <table className="budget-data">
        <thead>
          <tr className="budget-data-header">
            <th id="budget-header-expense">Expense Name</th>
            <th id="budget-header-cost">Cost</th>
            <th id="budget-header-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.expenseItems.length === 0 && <tr className="no-expense-text"><td colSpan={3}>No Expenses</td></tr>}
          {userData.expenseItems.map((expenseItem, index) => {
              return (
                <tr key={expenseItem.id} className="budget-data-item">
                  <td headers="budget-header-expense" className="budget-item-name">
                    <input type="text" id={expenseItem.id} ref={item => expenseItemNameRef.current[index] = item} placeholder={expenseItem.name} defaultValue={expenseItem.name} readOnly/>
                  </td>
                  <td headers="budget-header-cost" className="budget-item-cost">
                    <input type="number" id={expenseItem.id} ref={item => expenseCostRef.current[index] = item} placeholder={expenseItem.cost} defaultValue={expenseItem.cost} readOnly/>
                  </td>
                  <td headers="budget-header-actions" className="budget-item-actions">
                    { expenseItem.isBeingEdited ? <FontAwesomeIcon icon={faCheck} onClick={() => handleEditExpense(expenseItem.id) }/> : <FontAwesomeIcon icon={faPenToSquare} id={userData.id} onClick={() => handleFocusInput(expenseItem.id)}/> }
                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteExpense(expenseItem.id)}/>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <input type="button" value="Add Expense" className="budget-add-expense" onClick={handleAddExpense}/>
    </div>
    )
  }