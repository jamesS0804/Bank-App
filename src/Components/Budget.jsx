export default function Budget() {
    return (
      <div className="card budget-container">
        <h1>Expenses</h1>
        <div className="budget-data">
          <div className="budget-expense">
            <h1>Expense Name</h1>
            <div className="budget-expense-data">
              <div className="budget-expense-data-item">Test</div>
            </div>
          </div>
          <div className="budget-cost">
            <h1>Cost</h1>
            <div className="budget-cost-data">
              <div className="budget-cost-data-item">$1.00</div>
            </div>
          </div>
          <div className="budget-actions">
            <h1>Actions</h1>
            <div className="budget-actions-buttons">
              <input type="button" value="Edit"/>
              <input type="button" value="Delete"/>
            </div>
          </div>
        </div>
        <input type="button" value="Add Expense" className="budget-add-expense"/>
      </div>
    )
  }