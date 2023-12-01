import {BaseService} from "../BaseService";
import {QueryService} from "../../config/query";
import {ServiceBaseModel} from "../../config/model/BaseApiModel";
import {HomeData} from "../home/Model";

class TransactionsApi extends BaseService {
    getTransactions = (props: {start?: string , end?: string}) => new QueryService(
        async () => {
            return await this.api?.get<TransactionsApi>('/api/transactions/' , {
                params: props
            })
        },
        ['transactions' , props]
    )
}