import React from "react";
import { NavLink } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';

import styles from "../styles/navigation.module.css";
import "../index.css"

const Navigation: React.FC = () => {
    return (
        <nav className={styles['page-navigation']}>
            <NavLink to={"/profile"}>
                <PersonIcon/>
                <span>Profile</span>
            </NavLink>
            <NavLink to={"/top-artists"}>
                <MicExternalOnIcon/>
                <span>Top Artists</span>
            </NavLink>
            <NavLink to={"/playlist"}>
                <QueueMusicIcon/>
                <span>My Playlists</span>
            </NavLink>
            <NavLink to={"/top-songs"}>
                <MusicNoteIcon/>
                <span>Top Music</span>
            </NavLink>
        </nav>
    )
}

export default Navigation;