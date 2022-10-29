import React, {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null
    });

    const navigate = useNavigate();

    function login() {
        toggleIsAuth({
            ...isAuth, isAuth: true
        });

        navigate("/profile")
    }

    function logout() {
        toggleIsAuth(
            {
                ...isAuth,
                isAuth: false,
                user: null,
            });

        navigate('/')
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
