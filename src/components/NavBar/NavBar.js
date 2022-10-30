<<<<<<< HEAD
import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import styles from './Navbar.module.css'

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <nav>
                {isAuth ?
                    <>
                        <button
                            className={styles["button-design"]}
                            type="button" onClick={logout}
                        >
                            Logout
                        </button>

                    </>
                    :
                    <>
                        <button
                            className={styles["button-design"]}
                            type="button"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    </>
                }
            </nav>
        </>
    );
}

export default NavBar;
=======
import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import styles from './Navbar.module.css'

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <nav>
                {isAuth ?
                    <>
                        <button
                            className={styles["button-design"]}
                            type="button" onClick={logout}
                        >
                            Logout
                        </button>

                    </>
                    :
                    <>
                        <button
                            className={styles["button-design"]}
                            type="button"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    </>
                }
            </nav>
        </>
    );
}

export default NavBar;
>>>>>>> 1e00e8bc4861d6f3a31b335d666cdfaac22bd7fb
