import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "../Components/amountinputfield.css"

export default function AmountInputField(props) {
    const {value,setValue} = props
    function handleChange(event) {
        const input = event.target.value
        setValue(input)
    }
    return (
        <div className="amount-input-container">
            <FontAwesomeIcon className="currency-symbol" icon={faDollarSign} size="2x" />
            <input type="number" value={value} onInput={handleChange} min="1" required/>
        </div>
    )
}