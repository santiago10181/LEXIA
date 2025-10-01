import axios from 'axios';
import { API_URL, HEADERS, MODEL_MESSAGGES } from './Const_provider/api_header_Model.js';


async function llamarZaiAPIConAxios() {
    try {
        const response = await axios.post(API_URL, MODEL_MESSAGGES, { headers: HEADERS });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error al llamar Z.ai API con Axios:', error.response ? error.response.data : error.message);
        throw new Error(`Ocurrió un error: ${error.response ? error.response.data.error.message : error.message}. Inténtalo de nuevo más tarde.`);
    }
}

async function creaciónPet() {
    try {
        const respuesta = await llamarZaiAPIConAxios();
        // 2. Abrir la modal con la respuesta final de la API
        return respuesta;
    } catch (error) {
        // 3. Mostrar el error en la modal
        console.log(error.message);
    }
}   
 creaciónPet()
 export default creaciónPet