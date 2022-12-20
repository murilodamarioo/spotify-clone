import { IArtist, IPlaylist, IUser } from '../interfaces';

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

export function SpotifyArtistToArtist(spotifyArtist: SpotifyApi.ArtistObjectFull): IArtist {
    return {
        id: spotifyArtist.id,
        name: spotifyArtist.name,
        imageUrl: spotifyArtist.images.sort((a,b)=> a.width - b.width).pop().url
    }
}
