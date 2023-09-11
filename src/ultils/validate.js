export const validateForm = (formData) => {
    const newFormData = { ...formData };
    let isValid = true;
    Object.entries(newFormData).forEach(([key, fieldInput]) => {
        if (key !== 'agreeToTerms') {
            if (fieldInput.value.trim().length <= 0) {
                newFormData[key].error = 'Không được để rỗng';
                if (isValid) isValid = false;
            } else {
                delete newFormData[key].error;
            }
        }
    });

    return { isValid, newFormData };
};
