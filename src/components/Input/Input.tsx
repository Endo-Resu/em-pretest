import React, {FC} from 'react';
import s from './Input.module.scss';


interface IInputProps {
    id: string;
    placeholder: string;
    errorMessage?: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    blurred: boolean;
    empty: boolean;
    minLengthError: boolean;
    emailError?: boolean;
    maxLengthError?: boolean;
}

const Input: FC<IInputProps> = ({
                                    id,
                                    placeholder,
                                    type,
                                    errorMessage,
                                    value,
                                    onChange,
                                    onBlur,
                                    blurred,
                                    empty,
                                    minLengthError,
                                    emailError,
                                    maxLengthError,
}) => {

    return (
        <div className={s.container}>
            <input
                id={id}
                className={`${s.input} ${blurred && (empty || minLengthError || emailError || maxLengthError) ? s.input_invalid : ''}`}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label
                className={`${s.label} ${value && value !== '' ? s.label_active : ''}`}
                htmlFor={id}
            >
                {placeholder}
            </label>
            {errorMessage ?
                <div className={s.error}>
                    {errorMessage}
                </div>
                :
                null
            }
        </div>
    );
};

export default Input;
