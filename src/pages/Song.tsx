import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/song.module.css";
import PageTemplate from "./PageTemplate";
import Device from "../components/Device";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
import SongCard from "../components/SongCard";
import useFetch from "../hooks/useFetch";
import { HashLoader } from "react-spinners";
import { SpotifyAvailableDevices, SpotifyTrack, SpotifyQueueResponse } from "../models/spotify-types";

const Song: React.FC = () => {
    const {id} = useParams()
    const [updated, setUpdated] = useState(false);

    const { data, loading } = useFetch<SpotifyTrack>(`https://spotify-clone-server-production.up.railway.app/api/get-song/${id}`);
    const queueInfo = useFetch<SpotifyQueueResponse>(`https://spotify-clone-server-production.up.railway.app/api/get-queue/`);
    const deviceInfo = useFetch<SpotifyAvailableDevices>(`https://spotify-clone-server-production.up.railway.app/api/get-devices/`);

    return (
        <PageTemplate>
            {loading && <HashLoader color="#1db954"/>}
            {data && <div className={styles['info_wrapper']}>
                <div className={styles['info_main']}>
                    <div className={styles['song-info_wrapper']}>
                        <img src={data?.album.images[0].url} alt="song image"/>
                        <div className={styles['song-info']}>
                            <h1>{data?.name}</h1>
                            <div className={styles['artists-name']}>
                                <span>
                                    {data?.artists.map((artist) => {
                                        return artist.name
                                    }).join(', ')}
                                </span>
                            </div>
                            <p><b>Album: </b>{data?.album.name}</p>
                            <p><b>Year:</b> {data?.album.release_date}</p>
                            <p><b>Popularity:</b> {data?.popularity}</p>
                            <p><b>Duration:</b> {String(Math.floor(data?.duration_ms! / 60000)).padStart(2, '0')}:{String(Math.floor((data?.duration_ms! % 60000) / 1000)).padStart(2, '0')} Mins</p>
                            <a href={data?.external_urls.spotify} target="_blank">Play in Spotify</a>
                        </div>
                    </div>
                    <div className={styles['user-devices']}>
                        <h3>Play Using: </h3>
                        {deviceInfo && <div className={styles['user-device']}>
                            {deviceInfo.data?.devices.map((device) => {
                                return <Device 
                                    key={Math.random()} 
                                    device_id={device.id} 
                                    track_uri={data?.uri!}
                                    updateCaller={() => {setUpdated(!updated)}}
                                >
                                    {device.type === "Computer"? <ComputerIcon/>:
                                     device.type === "Smartphone"? <PhoneAndroidIcon/>: <SpeakerGroupIcon/>}
                                </Device>
                            })}
                        </div>}
                        {deviceInfo.data?.devices.length === 0 && <p>No Active Devices</p>}
                    </div>
                    <div className={styles['currently-playing']}>
                        <h3>Currently Playing</h3>
                        {queueInfo.data?.currently_playing && <SongCard
                            image={queueInfo.data?.currently_playing.album.images[0].url}
                            name={queueInfo.data?.currently_playing.name}
                            artists={queueInfo.data?.currently_playing.artists}
                            song_id={queueInfo.data?.currently_playing.id}
                            duration={queueInfo.data?.currently_playing.duration_ms}
                            album={queueInfo.data?.currently_playing.album}
                            key={Math.random()}
                        />}
                        {!queueInfo.data?.currently_playing && <p>No Song is playing now</p>}
                    </div>
                    <div className={styles['queue']}>
                        <h3>Queue</h3>
                        {queueInfo.data?.queue.map((song) => {
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
                        {!queueInfo.data?.queue.length && <p>Play a song to see the queue</p>}
                    </div>
                </div>
            </div>}
        </PageTemplate>
    );
};

export default Song;
