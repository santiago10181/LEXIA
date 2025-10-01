const API_KEY = '1fa92e1963064c439b96002eb31ab9db.7NTD7ouHvVosCivP';
export const API_URL = 'https://api.z.ai/api/paas/v4/chat/completions';

export const HEADERS = {
    'Authorization': `Bearer ${API_KEY}`,
    'Accept-Language': 'es-ES,es',
    'Content-Type': 'application/json',
};
export const MODEL_MESSAGGES = {
    model: 'glm-4.5-flash',
    messages: [
        {
            role: 'system',
            content: 'Eres un asistente legal especializado en derecho colombiano. Responde de manera profesional y estructurada.'
        },
        {
            role: 'user',
            content: "como se hace una tutela"
        }
    ],
    max_tokens: 4096,
    temperature: 0.7
}