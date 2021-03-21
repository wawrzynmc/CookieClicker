import axios from 'axios';

export const getAchivements = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/v1/achivements`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
