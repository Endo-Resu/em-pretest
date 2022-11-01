import {useEffect, useState} from "react";
import {ValidationType} from "../types/ValidationType";

export const useValidation = (value: string, validations: ValidationType) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, sePasswordError] = useState<boolean>(false);
    const [formValid, setFormValid] = useState<boolean>(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;

                case 'isEmpty':
                    value && value !== '' ? setIsEmpty(false) : setIsEmpty(true)
                    break;

                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;

                case 'isEmail':
                    const EmailValidity = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    EmailValidity.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [isEmpty, maxLengthError, emailError, minLengthError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        formValid,
        passwordError,
    }
}