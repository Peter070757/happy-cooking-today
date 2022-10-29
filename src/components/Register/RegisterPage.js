import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import styles from './Register.module.css';

function Register() {
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setRole] = useState('');

    //const history = useHistory();
    const navigate = useNavigate();

    async function RegisterUser(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    "username": userName,
                    "email": email,
                    "password": password,
                    "role": [user]
                });
            console.log(response)

            navigate("/login");
        } catch (e) {
            console.error(e);

        }
    }

    return (

        <>

            <form onSubmit={RegisterUser} className={styles.layout}>

                <label htmlFor="email" className={styles.form}>
                    Email:
                    <input
                        className={styles.form}
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Fill in your email address."
                    />
                </label>
                <label htmlFor="username" className={styles.form}>
                    Username:
                    <input
                        className={styles.form}
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        placeholder="Fill in your username"
                    />
                    {userName.length < 7 && <p className={styles["error-message"]}>Your username isn't long enough</p>}
                    {userName.length >= 7 && <p className={styles["good-message"]}>Your username is long enough</p>}
                </label>
                <label htmlFor="password" className={styles.form}>
                    Password:
                    <input
                        className={styles.form}
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Your password"
                    />
                    {password.length < 7 && <p className={styles["error-message"]}>Your password isn't long enough</p>}
                    {password.length >= 7 && <p className={styles["good-message"]}>Your password is long enough</p>}

                </label>

                <label htmlFor="role" className={styles.form}>
                    Role:
                    <input
                        className={styles.form}
                        type="text"
                        id="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={user}
                        placeholder="Fill in user or admin."
                    />
                </label>

                <button type="submit" className={styles["button-design"]}>Register</button>
            </form>

        </>
    );
}

export default Register;
