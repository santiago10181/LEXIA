import Paragraphs from "../../resources/Pararaphs";
import SubTitles from "../../resources/SubTitles";
import requestZapi from "../../../services/Api_call";
import { useState,useEffect } from "react";


const ModalResp = ({inputValue}) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const reqApi = async (inputValue) => {
        if (!inputValue) return;
        else{
            setLoading(true);
            try {
                const respuesta = await requestZapi(inputValue);
                // setResponse(respuesta);
                console.log(respuesta);                
                setLoading(false);
                return 
            } catch (error) {
            // 3. Mostrar el error en la modal
                setError(error.message);
                setLoading(false);
            }   
        }
        
    }
        useEffect(() => {       
        if(inputValue) reqApi(inputValue);
    }, [inputValue]);
    return(
        <article className="modal">
            <div className="modal-content">
                <SubTitles subtitle={"Title"}/>
                {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Paragraphs paragraph={response} />}
            </div>
        </article>
    )

}
export default ModalResp;