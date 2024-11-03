import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onInputNumberChange = ({ target }) => {
        const { name, value } = target;

        if (!isNaN(value)) {
            // const formattedValue = parseFloat(value).toFixed(2);
            setFormState({
                ...formState,
                [name]: value
            });
        }
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onInputNumberChange,
    }
}