import { inject, injectable } from "inversify"
import { PhotoRepsitory } from "../../domain/photoRepository"
import { Photo } from "../model/photo"
import RemoteService from '../remote/remoteService';
import { IntjectionKey } from "../../di/injection_key";

@injectable()
class PhotoRepsitoryImpl implements PhotoRepsitory {

    @inject(IntjectionKey.REMOTE_SERVICE)
    _remote!: RemoteService;

    async getPhotos(): Promise<Photo[]> {
        const res = await this._remote.getInstance().get<Photo[]>("/photos")
        return res.data
    }
}

export default PhotoRepsitoryImpl