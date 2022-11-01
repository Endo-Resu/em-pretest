import React, {useState} from 'react'
import s from './App.module.scss';
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import {ReactComponent as KeySVG} from "./assets/svg/key.svg";
import {ReactComponent as BgSVG} from "./assets/svg/bg.svg";
import Input from "./components/Input/Input";
import {useInput} from "./hooks/useInput";

function App() {
    const email = useInput('', {isEmpty: true, minLength: 6, maxLength: 99, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 8, maxLength: 20});

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        // вызов редьюсера/функции из стора, которая через метод user-service будет отпрпвавлять post-запрос на бэк, которого у меня нет :)
    }

    return (
        <div className={s.app}>
            <BgSVG/>
            <Form
                id="auth"
                title="Registration"
                button={<Button
                    disabled={!email.formValid || !password.formValid}
                        text="Register"
                        svg={<KeySVG/>}
                        type="submit"
                />}
                onSubmit={handleSubmit}
            >
                <>
                    <Input
                        id="email"
                        placeholder="Email"
                        type="email"
                        value={email.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={(e) => email.onBlur(e)}
                        blurred={email.blurred}
                        empty={email.isEmpty}
                        errorMessage="Email field must contain a valid email address."
                        minLengthError={email.minLengthError}
                        emailError={email.emailError}
                    />
                    <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={password.value}
                        onChange={(e) => password.onChange(e)}
                        onBlur={(e) => password.onBlur(e)}
                        blurred={password.blurred}
                        empty={password.isEmpty}
                        errorMessage="Password should be 8-20 characters."
                        minLengthError={password.minLengthError}
                        maxLengthError={password.maxLengthError}
                    />
                </>
            </Form>
        </div>
    )
}

export default App
