import DataState from "../../core/resource/dataState";
import { Photo } from "../data/model/photo";

export interface PhotoRepsitory {
    getPhotos(): Promise<DataState<Photo[] | null>>
}