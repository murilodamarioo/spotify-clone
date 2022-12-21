import { IArtist, IMusic } from "../interfaces";


export function newArtist(): IArtist {
    return {
        id: '',
        name: '',
        imageUrl: '' 
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