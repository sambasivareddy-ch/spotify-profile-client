import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Analytics } from "@vercel/analytics/next"

import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Playlist from "./pages/Playlist"
import Profile from "./pages/Profile"
import TopArtists from "./pages/TopArtists"
import TopSongs from "./pages/TopSongs"
import Song from "./pages/Song"
import PlaylistSongs from "./pages/PlaylistSongs"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      fetch('https://spotify-clone-server-production.up.railway.app/auth/is-auth', {
        credentials: 'include' // ensures cookies are sent
      })
      .then(res => res.json())
      .then(data => {
        if (!data.authenticated) {
          navigate('/')
        }
      });
    }
    checkLoginStatus();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/song/:id" element={<Song/>}/>
        <Route path="/top-artists" element={<TopArtists/>}/>
        <Route path="/top-songs" element={<TopSongs/>}/>
        <Route path="/playlist/:id/:name" element={<PlaylistSongs/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Login />} />
      </Routes>
      <Analytics/>
    </>
  )
}

export default App
