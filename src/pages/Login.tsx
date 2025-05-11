import React from "react";

import Button from "../components/Button";
import styles from "../styles/login.module.css";

const Login: React.FC = () => {
    const loginClickHandler = async () => {
        window.location.href = `${import.meta.env.VITE_SERVER}/login`;
    };

    return (
        <div className={styles["login-page_wrapper"]}>
            <div className={styles["login-container"]}>
                <Button
                    button_text="Continue with Spotify"
                    clickHandler={loginClickHandler}
                    className={styles["spotify-btn"]}
                />
                <p style={{color: "#fff"}}>Notice: Currently Spotify API is in Developer Mode, only Developer has access</p>
            </div>
        </div>
    );
};

export default Login;
