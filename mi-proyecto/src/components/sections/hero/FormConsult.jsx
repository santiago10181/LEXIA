import ButtonSend from "../../resources/ButtonSend"
import InputText from "../../resources/InputText"
import { useState } from "react"

const FormConsult = ({ handleSubmit }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (eventInput) => {
        setInputValue(eventInput.target.value);
    }


    return (  
        <form onSubmit={(e) => handleSubmit(e,inputValue)} className="form-consult">
            <InputText value={inputValue} onChange={handleInputChange} />
            <ButtonSend />
        </form>
      )

}
export default FormConsult;