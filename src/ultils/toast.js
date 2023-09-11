import { toast } from 'react-toastify';

export const showToast = (message, type) => {
    toast[type](message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        closeButton: false,
    });
};

