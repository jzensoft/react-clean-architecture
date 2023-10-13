import "reflect-metadata";
import { Container } from "inversify";
import { PhotoRepsitory } from "../domain/photoRepository";
import { IntjectionKey } from "./injection_key";
import PhotoRepsitoryImpl from "../data/repository/photoRepositoryImpl";
import RemoteService from "../data/remote/remoteService";
 
const container = new Container()
container.bind<RemoteService>(IntjectionKey.REMOTE_SERVICE).to(RemoteService).inSingletonScope()
container.bind<PhotoRepsitory>(IntjectionKey.PHOTOREPOSITORY).to(PhotoRepsitoryImpl).inSingletonScope()


export { container }