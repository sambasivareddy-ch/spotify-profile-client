import React, { useState } from "react";
import styles from "../styles/common.module.css";
import PageTemplate from "./PageTemplate";
import SongCard from "../components/SongCard";
import useFetch from "../hooks/useFetch";
import { HashLoader } from "react-spinners";
import { SpotifyPlaylistTracksResponse } from "../models/spotify-types";
import { useParams } from "react-router-dom";

const PlaylistSongs: React.FC = () => {
    const { id, name } = useParams();
    const { data, loading } = useFetch<SpotifyPlaylistTracksResponse>(`${process.env.REACT_APP_SERVER_URL}/api/get-playlist-track/${id}`)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalItems = data?.items.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentItems = data?.items.slice(startIdx, startIdx + itemsPerPage);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

    return (
        <PageTemplate>
            {loading && <HashLoader color="#1db954"/>}
            {data && <div className={styles['info_wrapper']}>
                <div className={styles['info_main']}>
                    <h2>{name}</h2>
                    <div className={styles['layout-playlist-songs']}>
                        {currentItems?.map((song) => (
                            <SongCard
                                image={song.track.album.images[0].url}
                                name={song.track.name}
                                artists={song.track.artists}
                                song_id={song.track.id}
                                duration={song.track.duration_ms}
                                album={song.track.album}
                                key={song.track.id}
                            />
                        ))}
                    </div>
                    <div className={styles['footer']}>
                        <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </div>
            </div>}
        </PageTemplate>
    );
};

export default PlaylistSongs;
