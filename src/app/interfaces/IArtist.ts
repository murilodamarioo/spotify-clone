import { IMusic } from 'src/app/interfaces';
export interface IArtist {
    id: string,
    name: string,
    imageUrl: string,
    musics: IMusic[]
}