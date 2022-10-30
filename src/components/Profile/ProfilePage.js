import React from 'react';
import NavBar from "../NavBar/NavBar";
import styles from './Profile.module.css';

function ProfilePage() {
    return (
        <>
            <main className={styles.layout}>

                <h3>This is your own personal profile page.</h3>
                <h4>Your login details</h4>
                <p>Username: Your Username</p>
                <p>Email Address: youremailaddress@home.nl</p>
                <h4>Personal profile content</h4>
                <p>Your personal and private information can be consulted here.</p>

                <NavBar/>

            </main>
        </>
    );
}

export default ProfilePage;

