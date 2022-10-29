import React, { useState } from "react";
import './LoginForm/Login.css';
import { Login } from "./LoginForm/Login";
import { Register } from "./LoginForm/Register";

function LoginForm() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="login">
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default LoginForm;
