
// Ejemplo básico de integración con Z.ai API usando fetch
const API_KEY = '1fa92e1963064c439b96002eb31ab9db.7NTD7ouHvVosCivP';
const API_URL = 'https://api.z.ai/api/paas/v4/chat/completions';

async function llamarZaiAPI(mensaje) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
                'Accept-Language': 'es-ES,es'
            },
            body: JSON.stringify({
                model: 'glm-4.5-flash', // Modelo GRATUITO
                messages: [
                    {
                        role: 'system',
                        content: 'Eres un asistente legal especializado en derecho colombiano.'
                    },
                    {
                        role: 'user',
                        content: mensaje
                    }
                ],
                max_tokens: 4096,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error al llamar Z.ai API:', error);
        throw error;
    }
}

// Uso del ejemplo
llamarZaiAPI('¿Cuáles son los requisitos para un contrato de arrendamiento en Colombia?')
    .then(respuesta => {
        console.log('Respuesta de Z.ai:', respuesta);
    })
    .catch(error => {
        console.error('Error:', error);
    });
