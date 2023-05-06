export default function AmountInputField(props) {
    const {value,setValue} = props
    function handleChange(event) {
        const input = event.target.value
        console.log(input)
        setValue(input)
    }
    return (
        <div className="deposit-amount-input">
            <span className="currency">$</span>
            <input type="text" placeholder={value} onInput={handleChange}/>
        </div>
    )
}