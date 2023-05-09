import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function AmountInputField(props) {
    const {value,setValue} = props
    function handleChange(event) {
        const input = event.target.value
        setValue(input)
    }
    return (
        <div className="deposit-amount-input">
            <FontAwesomeIcon icon={faDollarSign} />
            <input type="number" placeholder={value} onInput={handleChange} required/>
        </div>
    )
}