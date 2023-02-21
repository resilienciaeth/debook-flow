export const usernameValidate = {
    required: {
        value: true,
        message: 'Please enter username',
    },
    minLength: {
        value: 2,
        message: 'Please enter at least 2 characters',
    },
    pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: 'Please enter valid username',
    },
};

export const emailValidate = {
    required: {
        value: true,
        message: 'Please enter email',
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Please enter valid email address',
    },
};

export const passwordValidate = {
    required: {
        value: true,
        message: 'Please enter password',
    },
    minLength: {
        value: 6,
        message: 'Please enter at least 6 characters',
    }
}