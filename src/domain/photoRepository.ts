import { Photo } from "../data/model/photo";

export interface PhotoRepsitory {
    getPhotos(): Promise<Photo[]>
}