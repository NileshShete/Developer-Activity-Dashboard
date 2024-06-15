import axios from 'axios';

const API_URL = '/mockData.json';

export const fetchData = async () => {
    try {
        const response = await axios(API_URL);
        return response.data.data.AuthorWorklog;
    } catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
};
