import axios from 'axios';

export const getCharacters = async (page = 1) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return response.data.results;
    } catch (error) {
        throw error;
    }
};
