import "./budget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from "../Hooks/useLocalStorage"

export default function Budget() {
    const [expenseItems,setExpenseItems] = useLocalStorage("list")
    console.log(expenseItems)
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
            {
              expenseItems.map(expenseItem => {
                return (
                  <tr key={expenseItem.itemId} className="budget-data-item">
                    <td headers="budget-header-expense" className="budget-item-name">{expenseItem.itemName}</td>
                    <td headers="budget-header-cost" className="budget-item-cost">{expenseItem.itemCost}</td>
                    <td headers="budget-header-actions" className="budget-item-actions">
                      <FontAwesomeIcon icon={faPenToSquare} onClick={expenseItem.itemUpdate}/>
                      <FontAwesomeIcon icon={faTrash}/>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <input type="button" value="Add Expense" className="budget-add-expense"/>
      </div>
    )
  }