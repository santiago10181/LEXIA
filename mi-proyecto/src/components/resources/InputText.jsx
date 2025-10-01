
const InputText = ({value, onChange}) => {

    return(
        <input
            type="text"
            className="chat-input"
            placeholder="Ej: Redactar un contrato de arrendamiento comercial..."
            value={value}
            onChange={(e) => onChange(e)}
            name="chat-input-IA"
        />
    )
}
export default InputText;
