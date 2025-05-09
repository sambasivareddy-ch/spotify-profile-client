import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/playlistcard.module.css";

const PlaylistCard: React.FC<{
    image: string,
    name: string,
    id: string,
    owner: string
}> = (props) => {
    return (
        <div className={styles['playlist-card_wrapper']}>
            <Link to={`/playlist/${props.id}/${props.name}`}>
                <img src={props.image} alt="playlist image"/>
            </Link>
            <div>
                <h2>{props.name}</h2>
                <p>By {props.owner}</p>
            </div>
        </div>
    )
}

export default PlaylistCard;