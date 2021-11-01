import { useState } from 'react'

export const useForm = <T extends Object>(initialState: T) => {

    const [form, setForm] = useState(initialState);

    const onChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [target.name]: target.value
        })
    };

    return {
        onChange,
        form,
        ...form,
    }
}
