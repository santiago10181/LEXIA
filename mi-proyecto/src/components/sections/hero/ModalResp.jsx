import Paragraphs from "../../resources/Pararaphs";
import SubTitles from "../../resources/SubTitles";
import requestZapi from "../../../services/Api_call";
// import { useState } from "react";

const ModalResp = ({inputValue}) => {
    // const [response, setResponse] = useState(null);
    // const [error, setError] = useState(null);

    const reqApi = async (inputValue) => {
        if (!inputValue) return;
        else{
            console.log("loading...");
            try {
                const respuesta = await requestZapi(inputValue);
                return console.log(respuesta || "loading...");
            } catch (error) {
            // 3. Mostrar el error en la modal
                console.log(error.message);
            }
        }
    }
    reqApi(inputValue);

    return(
        <article className="modal">
            <div className="modal-content">
                <SubTitles subtitle={""}/>
                <Paragraphs paragraph={""} />
            </div>
        </article>
    )

}
export default ModalResp;