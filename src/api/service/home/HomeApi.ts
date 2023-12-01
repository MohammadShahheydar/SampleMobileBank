import {BaseService} from "../BaseService";
import {QueryService} from "../../config/query";
import {ServiceBaseModel} from "../../config/model/BaseApiModel";
import {HomeData} from "./Model";

class HomeApi extends BaseService {
    getHomeData = () => new QueryService(
        async () => {
            return await this.api?.get<ServiceBaseModel<HomeData>>('/api/balance/')
        },
        ['home']
    )
}