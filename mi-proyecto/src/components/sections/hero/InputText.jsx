
const InputText = ({value, onChange}) => {
    console.log(value);
    return(
        <input
            type="text"
            className="chat-input"
            placeholder="Ej: Redactar un contrato de arrendamiento comercial..."
            value={value}
            onChange={(e) => onChange(e)}
        />
    )
}
export default InputText;
