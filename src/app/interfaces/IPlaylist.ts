import { IMusic } from 'src/app/interfaces';
export interface IPlaylist {
    id: string,
    name: string,
    imageUrl: string,
    musics?: IMusic[]
}