import React from "react";

import Button from "../components/Button";
import styles from "../styles/login.module.css";

const Login: React.FC = () => {
    const loginClickHandler = async () => {
        window.location.href = "http://localhost:3000/login";
    };

    return (
        <div className={styles["login-page_wrapper"]}>
            <div className={styles["login-container"]}>
                <Button
                    button_text="Continue with Spotify"
                    clickHandler={loginClickHandler}
                    className={styles["spotify-btn"]}
                />
            </div>
        </div>
    );
};

export default Login;
