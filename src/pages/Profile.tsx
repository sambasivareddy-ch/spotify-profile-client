import React from "react";

import styles from "../styles/profile.module.css";
import PageTemplate from "./PageTemplate";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";
import { SpotifyUserType } from "../models/spotify-types";
import { HashLoader } from "react-spinners";

const Profile: React.FC = () => {
    const { data, loading } = useFetch<SpotifyUserType>('https://spotify-clone-server-production.up.railway.app/api/get-profile')

    const handleLogout = async () => {
        await fetch('https://spotify-clone-server-production.up.railway.app/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });
      
        // Redirect to login page or homepage
        window.location.href = '/';
    };

    return (
        <PageTemplate>
            {loading && <HashLoader color="#1db954"/>}
            {data && <div className={styles['user-info_wrapper']}>
                <div className={styles['user-info_main']}>
                    <img className={styles['user-image']} src={data?.images[0].url}/>
                    <div className={styles['user-info']}>
                        <h2>
                            <a href={data?.external_urls.spotify} target="_blank">{data?.display_name}</a>
                        </h2>
                        <p><b>Email:</b> {data?.email}</p>
                    </div>
                    <Button button_text="Logout" className={styles['logout-btn']} clickHandler={handleLogout}/>
                </div>
            </div>}
        </PageTemplate>
    );
};

export default Profile;
