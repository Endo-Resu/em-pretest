import React, {FC} from 'react';
import s from './Button.module.scss'

interface IButtonProps {
    text: string;
    svg?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<IButtonProps> = ({text, onClick, svg, disabled, type}) => {
    return (
        <button
            className={s.button}
            disabled={disabled}
            type={type}
            onClick={onClick}>
            {svg ?
                <div className={s.svg_wrapper}>
                    {svg}
                </div>
                :
                null
            }
            <span className={s.text}>
                {text}
            </span>
        </button>
    );
};

export default Button;
