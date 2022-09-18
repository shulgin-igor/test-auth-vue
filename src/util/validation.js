export const Validators = {
    required(v) {
        return !!v || `${this.label} is required`;
    },
    email(v) {
        return /.+@.+\..+/.test(v) || `${this.label} must be a valid email address`;
    },
    minLength(minLength) {
        return function (v) {
            return v.length >= minLength || `${this.label} must contain at least ${minLength} characters`
        };
    }
};

export const validationGroup = (label, ...validators) => {
    return validators.map(v => v.bind({label}));
};
