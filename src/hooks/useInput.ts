import React, {useState} from "react";
import {useValidation} from "./useValidation";
import {ValidationType} from "../types/ValidationType";


export const useInput = (initialValue: string, validations: ValidationType) => {
    const [value, setValue] = useState<string>(initialValue);
    const [blurred, setBlurred] = useState<boolean>(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setBlurred(true);
    }

    return {
        value,
        onChange,
        onBlur,
        blurred,
        ...valid,
    }
}