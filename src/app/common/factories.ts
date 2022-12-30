import { IPlaylist } from 'src/app/interfaces';
import { IArtist, IMusic } from "../interfaces";


export function newArtist(): IArtist {
    return {
        id: '',
        name: '',
        imageUrl: '' ,
        musics: []
    }
}

export function newMusic(): IMusic {
     return {
        id: '',
        album: {
            id: '',
            imageUrl: '',
            name: ''
        },
        artists: [],
        time: '',
        title: ''
     }
}

export function newPlaylist(): IPlaylist {
    return {
        id: '',
        name: '',
        imageUrl: '',
        musics: []
    }
}