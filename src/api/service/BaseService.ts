import {baseApi} from "../config/config";
import {AxiosInstance} from "axios";

export class BaseService {
    public api: AxiosInstance | undefined = undefined

    constructor() {
        this.api = baseApi()
    }
}