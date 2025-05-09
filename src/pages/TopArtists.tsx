import React from "react";

import useFetch from "../hooks/useFetch";
import styles from "../styles/common.module.css";
import PageTemplate from "./PageTemplate";
import ArtistCard from "../components/ArtistCard";
import { SpotifyArtistResponse } from "../models/spotify-types";
import { HashLoader } from "react-spinners";

const TopArtists: React.FC = () => {
    const { data, loading } = useFetch<SpotifyArtistResponse>('https://spotify-clone-server-production.up.railway.app/api/get-artists/')

    return (
        <PageTemplate>
            {loading && <HashLoader color="#1db954"/>}
            {data && <div className={styles['info_wrapper']}>
                <div className={styles['info_main']}>
                    <h2>Top Artists</h2>
                    <div className={styles['layout']}>
                        {data?.items.map((artist) => {
                            return <ArtistCard 
                                artist={artist}
                                key={Math.random()}
                            />
                        })}
                    </div>
                </div>
            </div>}
        </PageTemplate>
    );
};

export default TopArtists;
