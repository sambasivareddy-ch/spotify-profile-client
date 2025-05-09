export type SpotifyCategoryType = {
    id: string;
    icon: string;
    name: string;
    href: string;
}

export type SpotifyImage = {
    url: string;
    height: number;
    width: number;
  };
  
export type SpotifyFollowers = {
    href: string;
    total: number;
};

export type SpotifyExternalUrls = {
    spotify: string;
};
  
export type SpotifyArtist = {
    external_urls: SpotifyExternalUrls;
    followers: SpotifyFollowers;
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
};

export type SpotifyArtistResponse = {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SpotifyArtist[];
};  

export type SpotifyUserType = {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean;
        filter_locked: boolean;
    };
    external_urls: SpotifyExternalUrls;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    images: SpotifyImage[];
    product: string;
    type: string;
    uri: string;
};

export type SpotifyArtistForTrack = {
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
};
  
export type SpotifyAlbum = {
    album_type: string;
    artists: SpotifyArtistForTrack[];
    available_markets: string[];
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    images: SpotifyImage[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: "album";
    uri: string;
};
  
export type SpotifyTrack = {
    album: SpotifyAlbum;
    artists: SpotifyArtistForTrack[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: "track";
    uri: string;
};
  
export type SpotifyTopTracksResponse = {
    items: SpotifyTrack[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    next: string | null;
    previous: string | null;
};

export type SpotifyAudioFeatures = {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: "audio_features";
    uri: string;
    valence: number;
};

export type SpotifyDevice = {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string; // Example: "Computer", "Smartphone", "Speaker"
    volume_percent: number;
    supports_volume: boolean;
};
  
export type SpotifyAvailableDevices = {
    devices: SpotifyDevice[];
};

export type SpotifyQueueResponse = {
    currently_playing: SpotifyTrack;
    queue: SpotifyTrack[];
};

export type SpotifyOwner = {
    display_name: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: "user";
    uri: string;
};

export type SpotifyShow = {
    id: string;
    name: string;
    description: string;
    external_urls: SpotifyExternalUrls;
    href: string;
    images: SpotifyImage[];
    owner: SpotifyOwner;
    collaborative: boolean;
    public: boolean;
    snapshot_id: string;
    tracks: { href: string; total: number };
    type: string; // typically "show"
    uri: string;
};
  
export  type SpotifySavedShowsResponse = {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SpotifyShow[];
};

export type SpotifyTrackInShow = {
    added_at: string;
    added_by: {
      external_urls: SpotifyExternalUrls;
      href: string;
      id: string;
      type: "user";
      uri: string;
    };
    is_local: boolean;
    track: SpotifyTrack;
};

export  type SpotifyPlaylistTracksResponse = {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SpotifyTrackInShow[];
};