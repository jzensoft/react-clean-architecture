import { inject, injectable } from "inversify"
import { PhotoRepsitory } from "../../domain/photoRepository"
import { Photo } from "../model/photo"
import RemoteService from '../remote/remoteService';
import { IntjectionKey } from "../../di/injection_key";
import DataState from "../../../core/resource/dataState";

@injectable()
class PhotoRepsitoryImpl implements PhotoRepsitory {

    @inject(IntjectionKey.REMOTE_SERVICE)
    _remote!: RemoteService;

    async getPhotos(): Promise<DataState<Photo[] | null>> {
        const res = await this._remote.getInstance().get<Photo[]>("/photos")
        return new DataState(res.data, res.status == 200, res.statusText)
    }
}

export default PhotoRepsitoryImpl