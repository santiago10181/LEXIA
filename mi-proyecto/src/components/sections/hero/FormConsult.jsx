import ButtonSend from "../../resources/ButtonSend"
import InputText from "../../resources/InputText"
import { useState } from "react"

const FormConsult = ({ handleSubmit }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (eventInput) => {
        setInputValue(eventInput.target.value);
    }

    return (  
        <form onSubmit={(e) => handleSubmit(e,inputValue)} className="max-w-4xl mx-auto w-full px-4">
            <label htmlFor="input-text-IA" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="mt-5 relative w-full">
                <InputText value={inputValue} onChange={handleInputChange} />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ButtonSend />
                </div>
            </div>
        </form>
    )
}

export default FormConsult;
