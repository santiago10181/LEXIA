
// const API_KEY = '1fa92e1963064c439b96002eb31ab9db.7NTD7ouHvVosCivP';
// const API_URL = 'https://api.z.ai/api/paas/v4/chat/completions';

// async function llamarZaiAPI(mensaje) {
//     // 1. Mostrar estado de carga en el modal
//     try {
//         const response = await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${API_KEY}`,
//                 'Accept-Language': 'es-ES,es'
//             },
//             body: JSON.stringify({
//                 model: 'glm-4.5-flash',
//                 messages: [
//                     {
//                         role: 'system',
//                         content: 'Eres un asistente legal especializado en derecho colombiano. Responde de manera profesional y estructurada.'
//                     },
//                     {
//                         role: 'user',
//                         content: mensaje 
//                     }
//                 ],
//                 max_tokens: 4096,
//                 // temperature: 0.7
//             })
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(`Error HTTP ${response.status}: ${errorData.message || 'Error desconocido de API'}`);
//         }

//         const data = await response.json();
//         return data.choices[0].message.content; // Retorna solo el texto de la respuesta
//     } catch (error) {
//         console.error('Error al llamar Z.ai API:', error);
//         // Manejo del error en la UI (modal)
//         throw new Error(`Ocurrió un error: ${error.message}. Inténtalo de nuevo más tarde.`);
//     }
// }

// // // Función principal para iniciar la petición y manejar la respuesta en el modal
// // async function creaciónPet(inp) {
// //     try {
// //         const respuesta = await llamarZaiAPI(inp);
// //         // 2. Abrir la modal con la respuesta final de la API
// //         openModal(respuesta);
// //     } catch (error) {
// //         // 3. Mostrar el error en la modal
// //         openModal(error.message);
// //     }
// // }
