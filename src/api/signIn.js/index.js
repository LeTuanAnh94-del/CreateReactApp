import axios from 'axios';

export const loginApi = ({ email, password }) => {
    return axios.post('https://dev.go.locate.sa/api/admin/api/v1/test/login', {
        email,
        password,
    });
};
export const profileAccountApi = ({ token }) => {
    return axios.get('https://dev.go.locate.sa/api/admin/api/v1/test/profile', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
