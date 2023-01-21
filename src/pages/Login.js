import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
function Login() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <>
            {
                currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <SignupForm onFormSwitch={toggleForm} />
            }
        </>
    )
}

export default Login