import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { loginApi, profileAccountApi } from '../../api/signIn.js';
import { validateForm } from '../../ultils/validate.js';
import { showToast } from '../../ultils/toast.js';

function useLogicSignIn() {
    const [formData, setFormData] = useState({
        email: { value: '', error: '' },
        password: { value: '', error: '' },
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => {
            return {
                ...formData,
                [name]: {
                    ...formData[name],
                    value: value,
                },
            };
        });
    };
    const handleLogin = async () => {
        setIsLoading(true);

        const { email, password } = formData;
        const { isValid, newFormData } = validateForm(formData);

        if (!isValid) {
            setFormData(formData);
            setFormData((prevFormData) => {
                const newFormDataEntries = Object.entries(newFormData);
                const updatedFormData = { ...prevFormData };

                for (const [key, value] of newFormDataEntries) {
                    updatedFormData[key] = { ...prevFormData[key], error: value.error };
                }

                return updatedFormData;
            });
            setIsLoading(false);

            return;
        }
        let responseLogin = null;

        try {
            responseLogin = await loginApi({ email: email.value, password: password.value });
        } catch (error) {
            showToast('Sai email hoặc tài khoản', 'error');
            setIsLoading(false);
        }

        const token = responseLogin.data.token;
        localStorage.setItem('token', token);
        let tokenActive = localStorage.getItem('token');

        if (tokenActive) {
            let responseData = '';

            try {
                responseData = await profileAccountApi({ token });
            } catch (error) {}

            if (responseData.data.status === 'ACTIVE') {
                setIsLoading(false);
                navigate('/congratulation');
            }
        }
    };

    return { formData, isLoading, handleLogin, handleChange };
}

export default useLogicSignIn;
