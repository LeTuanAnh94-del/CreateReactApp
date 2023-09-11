import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { activeAccountApi, registerApi } from '../../api/signUp.js/index.js';
import { validateForm } from '../../ultils/validate.js';
import { showToast } from '../../ultils/toast.js';
import { delay } from '../../ultils/delay.js';

const useLogicSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [formData, setFormData] = useState({
        fullname: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        agreeToTerms: { value: false },
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData((formData) => {
            return {
                ...formData,
                [name]: {
                    ...formData[name],
                    value: inputValue,
                },
            };
        });
    };
    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        const { fullname, email, password } = formData;
        const { isValid, newFormData } = validateForm(formData);

        if (!isValid) {
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
        let responseRegister = null;

        try {
            responseRegister = await registerApi({
                fullname: fullname.value,
                email: email.value,
                password: password.value,
            });
        } catch (error) {
            showToast('Tài khoản đã tồn tại', 'error');
            setIsLoading(false);
            setIsClicked(true);
            await delay(5000);
            setIsClicked(false);
        }

        if (responseRegister.data) {
            let responseActive = null;

            try {
                responseActive = await activeAccountApi({ userId: responseRegister?.data?.user });
            } catch (error) {}

            if (responseActive.data.status === 200) {
                showToast('Tạo tài khoản thành công', 'success');
                setIsLoading(false);
                await delay(2000);
                navigate('/Sign_in');
            }
        }
    };

    return { formData, isLoading, handleChange, handleSubmit, isClicked };
};

export default useLogicSignUp;
