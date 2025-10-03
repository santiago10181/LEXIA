const InputText = ({value, onChange}) => {
    return(
        <input
            id="input-text-IA"
            type="text"
            className="w-full p-4 ps-12 pe-14 text-sm text-gray-800 placeholder-gray-500
             border border-gray-200 rounded-xl bg-white shadow-sm
             focus:ring-2 focus:ring-lime-300 focus:border-lime-300
             transition-all duration-200 ease-in-out"
            placeholder="Ej: Redactar un contrato de arrendamiento comercial..."
            value={value}
            onChange={(e) => onChange(e)}
            name="chat-input-IA"
        />
    )
}
export default InputText;
