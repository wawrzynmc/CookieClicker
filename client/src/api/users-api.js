import axios from 'axios';

export const signIn = async (data) => {
    try {
        await axios.post(
            `${process.env.REACT_APP_SERVER_API_URL}/v1/users/signin`,
            data
        );
    } catch (error) {
        console.log('dasdasdsa', error.response);
        throw error.response.data.errors;
    }
};
