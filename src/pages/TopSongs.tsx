import React from "react";

import styles from "../styles/common.module.css";
import PageTemplate from "./PageTemplate";
import useFetch from "../hooks/useFetch";
import { SpotifyTopTracksResponse } from "../models/spotify-types";
import SongCard from "../components/SongCard";
import { HashLoader } from "react-spinners";

const TopSongs: React.FC = () => {
    const { data, loading } = useFetch<SpotifyTopTracksResponse>('https://spotify-clone-server-production.up.railway.app/api/get-tracks')

    return (
        <PageTemplate>
            {loading && <HashLoader color="#1db954"/>}
            {data && <div className={styles['info_wrapper']}>
                <div className={styles['info_main']}>
                    <h2>Top Songs</h2>
                    <div className={styles['layout']}>
                        {data?.items.map((song) => {
                            return <SongCard
                                image={song.album.images[0].url}
                                name={song.name}
                                artists={song.artists}
                                song_id={song.id}
                                duration={song.duration_ms}
                                album={song.album}
                                key={Math.random()}
                            />
                        })}
                    </div>
                </div>
            </div>}
        </PageTemplate>
    );
};

export default TopSongs;
