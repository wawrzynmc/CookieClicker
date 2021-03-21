import axios from 'axios';

/*
Aplikacja powinna posiadać warstwę odpowiedzialną za komunikację z API, 
które udostępnia endpoint `PATCH <host>/api/v1/progress` z parametrem `click_count`
*/

export const updateProgress = async (data) => {
    const { click_count } = data;

    try {
        await axios.patch(
            `${process.env.REACT_APP_SERVER_API_URL}/v1/users/progress/${click_count}`,
            {},
            {
                withCredentials: true,
            }
        );
    } catch (error) {
        throw error;
    }
};
