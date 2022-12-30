import { addMilliseconds, format } from 'date-fns';
import { IArtist, IMusic, IPlaylist, IUser } from '../interfaces';
import { newMusic, newPlaylist } from './factories';


export function spotifyUserToUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
    return {
        id: user.id,
        name: user.display_name,
        imageUrl: user.images.pop().url
    }
}

export function spotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images.pop().url
    }
}

export function spotifySinglePlaylistToPlaylist(playlist: SpotifyApi.SinglePlaylistResponse): IPlaylist {
    if (!playlist) {
        return newPlaylist()
    }

    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images.shift().url,
        musics: []
    }
}

export function spotifyArtistToArtist(spotifyArtist: SpotifyApi.ArtistObjectFull): IArtist {
    return {
        id: spotifyArtist.id,
        name: spotifyArtist.name,
        imageUrl: spotifyArtist.images.sort((a,b)=> a.width - b.width).pop().url,
        musics: []
    }
}

export function spotifyTrackToMusic(spotifyTrack: SpotifyApi.TrackObjectFull): IMusic {

    if (!spotifyTrack) {
        return newMusic()
    }

    const msToMinutes = (ms: number) => {
        const date = addMilliseconds(new Date(0), ms)
        return format(date, 'mm:ss')
    }

    return {
        id: spotifyTrack.uri,
        title: spotifyTrack.name,
        album: {
            id: spotifyTrack.id,
            imageUrl: spotifyTrack.album.images.shift().url,
            name: spotifyTrack.album.name
        },
        artists: spotifyTrack.artists.map(artist => ({
            id: artist.id,
            name: artist.name
        })),
        time: msToMinutes(spotifyTrack.duration_ms)
    }
}
