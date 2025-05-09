import React from "react";

import styles from "../styles/common.module.css";
import PageTemplate from "./PageTemplate";
import useFetch from "../hooks/useFetch";
import { HashLoader } from "react-spinners";
import { SpotifySavedShowsResponse } from "../models/spotify-types";
import PlaylistCard from "../components/PlaylistCard";

const Playlist: React.FC = () => {
    const { data, loading } = useFetch<SpotifySavedShowsResponse>('https://spotify-clone-server-production.up.railway.app/api/get-playlist/')

    return (
        <PageTemplate>
            {loading && <HashLoader color="#1db954"/>}
            {data && <div className={styles['info_wrapper']}>
                <div className={styles['info_main']}>
                    <h2>My Playlists</h2>
                    <div className={styles['layout-playlist']}>
                        {data && data.items.map((playlist) => {
                            return <PlaylistCard
                                image={playlist.images[0].url}
                                name={playlist.name}
                                owner={playlist.owner.display_name}
                                id={playlist.id}
                                key={Math.random()}
                            />
                        })}
                    </div>
                </div>
            </div>}
        </PageTemplate>
    );
};

export default Playlist;
