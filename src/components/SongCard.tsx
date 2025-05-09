import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/common.module.css"
import { SpotifyArtistForTrack, SpotifyAlbum } from "../models/spotify-types";

const SongCard: React.FC<{
    image: string,
    name: string,
    artists: SpotifyArtistForTrack[],
    duration: number,
    album: SpotifyAlbum,
    song_id: string,
}> = (props) => {
    return (
        <div className={styles['card_wrapper']}>
            <div className={styles['info']}>
                <img src={props.image} alt="Song Image"/>
                <div className={styles['meta']}>
                    <p className={styles['name']}>{props.name}</p>
                    <div className={styles['artists']}>
                        {props.artists && props.artists.map((artist) => {
                            return artist.name
                        }).join(', ')}
                    </div>
                    <p>Album: {props.album.name}</p>
                </div>
            </div>
            <div className={styles['handler']}>
                <p>{String(Math.floor(props.duration / 60000)).padStart(2, '0')}:{String(Math.floor((props.duration % 60000) / 1000)).padStart(2, '0')}</p>
                <Link to={`/song/${props.song_id}`}>Preview</Link>
            </div>
        </div>
    )
}

export default SongCard;