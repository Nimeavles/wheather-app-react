import axios from 'axios';

const URI = 'https://api.openweathermap.org/data/2.5';

export async function getDataFromApi(endpoint: string) {
    const response = await axios.get(`${URI}${endpoint}`);

    return response;
}