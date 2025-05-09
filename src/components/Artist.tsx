import React from "react";

import styles from "../styles/portal.module.css"
import { SpotifyArtist } from "../models/spotify-types";
import Button from "./Button";

const Artist: React.FC<{
    artist: SpotifyArtist,
    clickHandler: () => void;
}> = (props) => {
    return (
        <div className={styles['portal-card_wrapper']}>
            <div className={styles['portal-card_main']}>
                <div className={styles['portal-info']}>
                    <img src={props.artist.images[0].url} alt="Artist Image"/>
                    <div className={styles['meta']}>
                        <h1 className={styles['name']}>{props.artist.name}</h1>
                        <h3>Popularity: {props.artist.popularity}</h3>
                        <h3>Followers: {props.artist.followers.total.toLocaleString()}</h3>
                        <ul>
                            Genres:
                            {props.artist.genres.map((genre) => {
                                return <li key={Math.random()}>{genre}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <Button className={styles['close-btn']} button_text="Close" clickHandler={props.clickHandler}/>
            </div>
        </div>
    )
}

export default Artist;