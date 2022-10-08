import axios from 'axios';

const URI = 'https://api.openweathermap.org/data/2.5';

export async function getDataFromApi(endpoint: string) {
    const response = await axios.get(`${URI}${endpoint}&appid=${import.meta.env.VITE_API_KEY}&lang=es&units=metric`);

    return response;
}