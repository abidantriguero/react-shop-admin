const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: '${API}/users/login',
    },
};

export default endPoints;
