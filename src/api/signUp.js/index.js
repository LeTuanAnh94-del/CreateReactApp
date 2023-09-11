import axios from 'axios';

export const registerApi = ({ fullname, email, password }) => {
    return axios.post('https://dev.go.locate.sa/api/admin/api/v1/test/register', {
        fullname,
        email,
        password,
    });
};
export const activeAccountApi = ({ userId }) => {
    return axios.patch(
        `https://dev.go.locate.sa/api/admin/api/v1/test/users/${userId}/active`,
        {},
        {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.NjQzNjIyMmQ1NzgwMTEzOWNmYzUyNzMx.FHuabwi3sRHJqU0pBYTZlaZX2nOMgAv88tzNfOPgHpM',
            },
        },
    );
};
