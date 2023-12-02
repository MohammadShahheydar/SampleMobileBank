import {BaseService} from "../BaseService";
import {QueryService} from "../../config/query";
import {MutateService} from "../../config/mutate";
import {ValuesType} from "../../../features/app/ui/validation/AddTransactionValidation";
import {useQueryClient} from "react-query";
import {TransactionsApiModel} from "./Model";

class TransactionsApi extends BaseService {

    getTransactions = (props: { start?: string | number, end?: string | number }) => new QueryService(
        async () => {
            return await this.api?.get<TransactionsApiModel>('/api/transactions/', {
                params: props
            })
        },
        ['transactions', props]
    )

    addTransactions = () => new MutateService(
        async (props: ValuesType) => {
            return await this.api?.post<any>('/api/transactions/', props)
        },
        () => {
            useQueryClient().invalidateQueries({queryKey: ['home']})
        }
    )
}

export const transactionsApi = () => new TransactionsApi()