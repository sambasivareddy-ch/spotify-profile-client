import React, { useState } from "react";
import { createPortal } from "react-dom";

import styles from "../styles/common.module.css"
import { SpotifyArtist } from "../models/spotify-types";
import Artist from "./Artist";

const ArtistCard: React.FC<{
    artist: SpotifyArtist
}> = (props) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    return (
        <div className={styles['card_wrapper']}>
            <div className={styles['info']}>
                <img src={props.artist.images[0].url} alt="Artist Image"/>
                <div className={styles['meta']}>
                    <p className={styles['name']}>{props.artist.name}</p>
                    <p>Popularity: {props.artist.popularity}</p>
                </div>
            </div>
            <button onClick={() => {setIsButtonClicked(true)}}>Show Info</button>
            {isButtonClicked && createPortal(
                <Artist artist={props.artist} clickHandler={() => setIsButtonClicked(false)}/>, 
                document.getElementById('artist-portal')!)
            }
        </div>
    )
}

export default ArtistCard;