# 🎧 Spotify Profile Frontend

A sleek and responsive frontend application that integrates with the **Spotify Web API** to deliver a personalized music dashboard. Users can view their profile, explore top artists and songs, manage playlists, and interact with Spotify playback features.

---

## 🧾 Definition / Purpose

This application provides users with a rich, interactive dashboard connected to their Spotify account. It helps visualize their music taste, manage playback, and interact with Spotify features in a more personalized way.

---

🔗 **Live Preview**: [spotify-profile-dashboard.vercel.app](https://spotify-profile-dashboard.vercel.app/)

---

## ⚙️ Implementation

- **Frontend Framework**: React.js, Typescript and Vite
- **Authentication**: OAuth 2.0 (Spotify Authorization Code Flow)
- **API**: [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- **Routing**: React Router
- **Styling**: styled-components
- **State Management**: Context API or Redux (optional)

### 📁 Folder Structure
```bash
/src
├── assets/
│   ├── Assets here
├── components/
│   ├── Artist.tsx
│   ├── ArtistCard.tsx
│   ├── Button.tsx
│   ├── Device.tsx
│   ├── Navigation.tsx
│   ├── PlaylistCard.tsx
│   ├── SongCard.tsx
├── hooks/
│   ├── useFetch.ts
│   ├── useLoginStatus.ts
├── models/
│   ├── spotify-types.ts
├── pages/
│   ├── Login.tsx
│   ├── PageTemplate.tsx
│   ├── Playlist.tsx
│   ├── PlaylistSongs.tsx
│   ├── Profile.tsx
│   ├── Song.tsx
│   ├── TopArtists.tsx
│   ├── TopSongs.tsx
├── utils/
│   ├── spotifyApi.js
├── styles/
│   ├── Styles here
├── App.js
├── index.js
```


---

## 🚀 Practical Usage

| Feature            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **👤 Profile Page**     | View user's name, profile image, email address and logout button.          |
| **🎨 Top Artists**      | Displays top artists with follower count, popularity, and genres.           |
| **🎵 Top Songs**        | Lists top tracks including album name, artist, and duration.            |
| **📂 User's Playlists** | Shows all personal playlists with names, images, and track numbers.         |
| **🎧 Song Page**        | Detailed view of a song with:                                               |
|                      | - Artist(s), album, duration, popularity                                      |
|                      | - Spotify controls: Play in Spotify, device transfer, view queue, now playing |

---

## 💡 Why It Was Introduced

Spotify’s native interface lacks a personal analytics dashboard and advanced playback features in a unified place. This app was introduced to:

- Help users explore their own listening habits
- Provide better visibility into favorite artists and songs
- Offer richer control over Spotify playback and devices

---

## 📚 Resources

- 🔗 [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- 🔐 [Spotify Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)
- 🎛️ [Spotify Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/)
- ⚛️ [React Documentation](https://reactjs.org/docs/getting-started.html)
  
---

## 📸 Preview

👉 **Live Demo**: [spotify-profile-dashboard.vercel.app](https://spotify-profile-dashboard.vercel.app/)

Feel free to clone, explore, or contribute!

---

## 🛠️ Setup Instructions (Optional)

```bash
git clone https://github.com/sambasivareddy-ch/spotify-profile-client.git
cd spotify-profile-client
npm install
npm start
