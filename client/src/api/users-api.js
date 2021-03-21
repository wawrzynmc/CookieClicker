import axios from 'axios';

export const checkAuth = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/v1/users`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signIn = async (data) => {
    try {
        await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/v1/users/signin`, data, {
            withCredentials: true,
        });
    } catch (error) {
        throw error;
    }
};

export const signUp = async (data) => {
    try {
        await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/v1/users/signup`, data, {
            withCredentials: true,
        });
    } catch (error) {
        throw error;
    }
};

export const signOut = async () => {
    try {
        await axios.post(
            `${process.env.REACT_APP_SERVER_API_URL}/v1/users/signout`,
            {},
            {
                withCredentials: true,
            }
        );
    } catch (error) {
        throw error;
    }
};
