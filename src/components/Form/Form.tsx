import React, {FC} from 'react';
import s from './Form.module.scss';

interface IFromProps {
    id: string;
    title: string;
    children: React.ReactNode;
    button: React.ReactNode;
    onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
}

const Form: FC<IFromProps> = ({id, onSubmit, title, children, button}) => {
    return (
        <form
            className={s.form}
            id={id}
            onSubmit={onSubmit}
        >
            <h1 className={s.title}>
                {title}
            </h1>
            <div className={s.content}>
                {children}
            </div>
            {button}
        </form>
    );
};

export default Form;
